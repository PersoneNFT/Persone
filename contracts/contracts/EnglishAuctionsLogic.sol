// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import "./EnglishAuctionsStorage.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "../../../eip/interface/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../../extension/interface/IPlatformFee.sol";
import "../../../extension/upgradeable/ReentrancyGuard.sol";
import "../../../extension/upgradeable/PermissionsEnumerable.sol";
import { CurrencyTransferLib } from "../../../lib/CurrencyTransferLib.sol";

contract EnglishAuctionsLogic is IEnglishAuctions, ReentrancyGuard {
    bytes32 private constant LISTER_ROLE = keccak256("LISTER_ROLE");
    bytes32 private constant ASSET_ROLE = keccak256("ASSET_ROLE");
    uint64 private constant MAX_BPS = 10_000;
    address private immutable nativeTokenWrapper;

    modifier onlyListerRole() {
        require(Permissions(address(this)).hasRoleWithSwitch(LISTER_ROLE, msg.sender), "!LISTER_ROLE");
        _;
    }

    modifier onlyAssetRole(address _asset) {
        require(Permissions(address(this)).hasRoleWithSwitch(ASSET_ROLE, _asset), "!ASSET_ROLE");
        _;
    }

    modifier onlyAuctionCreator(uint256 _auctionId) {
        require(
            _englishAuctionsStorage().auctions[_auctionId].auctionCreator == msg.sender,
            "Marketplace: not auction creator."
        );
        _;
    }

    modifier onlyExistingAuction(uint256 _auctionId) {
        require(
            _englishAuctionsStorage().auctions[_auctionId].status == IEnglishAuctions.Status.CREATED,
            "Marketplace: invalid auction."
        );
        _;
    }

    constructor(address _nativeTokenWrapper) {
        nativeTokenWrapper = _nativeTokenWrapper;
    }

    function createAuction(
        AuctionParameters calldata _params
    ) external onlyListerRole onlyAssetRole(_params.assetContract) nonReentrant returns (uint256 auctionId) {
        auctionId = _getNextAuctionId();
        address auctionCreator = msg.sender;
        TokenType tokenType = _getTokenType(_params.assetContract);

        _validateNewAuction(_params, tokenType);

        Auction memory auction = Auction({
            auctionId: auctionId,
            auctionCreator: auctionCreator,
            assetContract: _params.assetContract,
            tokenId: _params.tokenId,
            quantity: _params.quantity,
            currency: _params.currency,
            minimumBidAmount: _params.minimumBidAmount,
            buyoutBidAmount: _params.buyoutBidAmount,
            timeBufferInSeconds: _params.timeBufferInSeconds,
            bidBufferBps: _params.bidBufferBps,
            startTimestamp: _params.startTimestamp,
            endTimestamp: _params.endTimestamp,
            tokenType: tokenType,
            status: IEnglishAuctions.Status.CREATED
        });

        _englishAuctionsStorage().auctions[auctionId] = auction;

        _transferAuctionTokens(auctionCreator, address(this), auction);

        emit NewAuction(auctionCreator, auctionId, _params.assetContract, auction);
    }

    function _payout(
        address _payer,
        address _payee,
        address _currencyToUse,
        uint256 _totalPayoutAmount,
        Auction memory _targetAuction
    ) internal {
        uint256 amountRemaining;

        (address platformFeeRecipient, uint16 platformFeeBps) = IPlatformFee(address(this)).getPlatformFeeInfo();
        uint256 platformFeeCut = (_totalPayoutAmount * platformFeeBps) / MAX_BPS;

        // Transfer platform fee
        CurrencyTransferLib.transferCurrencyWithWrapper(
            _currencyToUse,
            _payer,
            platformFeeRecipient,
            platformFeeCut,
            nativeTokenWrapper
        );

        // Transfer remaining amount to the payee (seller)
        amountRemaining = _totalPayoutAmount - platformFeeCut;
        CurrencyTransferLib.transferCurrencyWithWrapper(_currencyToUse, _payer, _payee, amountRemaining, nativeTokenWrapper);
    }

    function _handleBid(Auction memory _targetAuction, Bid memory _incomingBid) internal {
        Bid memory currentWinningBid = _englishAuctionsStorage().winningBid[_targetAuction.auctionId];
        uint256 currentBidAmount = currentWinningBid.bidAmount;
        uint256 incomingBidAmount = _incomingBid.bidAmount;

        if (_targetAuction.buyoutBidAmount > 0 && incomingBidAmount >= _targetAuction.buyoutBidAmount) {
            incomingBidAmount = _targetAuction.buyoutBidAmount;
            _incomingBid.bidAmount = _targetAuction.buyoutBidAmount;

            _closeAuctionForBidder(_targetAuction, _incomingBid);
        } else {
            require(
                _isNewWinningBid(
                    _targetAuction.minimumBidAmount,
                    currentBidAmount,
                    incomingBidAmount,
                    _targetAuction.bidBufferBps
                ),
                "Marketplace: not winning bid."
            );

            _englishAuctionsStorage().winningBid[_targetAuction.auctionId] = _incomingBid;

            if (_targetAuction.endTimestamp - block.timestamp <= _targetAuction.timeBufferInSeconds) {
                _targetAuction.endTimestamp += _targetAuction.timeBufferInSeconds;
                _englishAuctionsStorage().auctions[_targetAuction.auctionId] = _targetAuction;
            }
        }

        if (currentWinningBid.bidder != address(0) && currentBidAmount > 0) {
            CurrencyTransferLib.transferCurrencyWithWrapper(
                _targetAuction.currency,
                address(this),
                currentWinningBid.bidder,
                currentBidAmount,
                nativeTokenWrapper
            );
        }

        CurrencyTransferLib.transferCurrencyWithWrapper(
            _targetAuction.currency,
            _incomingBid.bidder,
            address(this),
            incomingBidAmount,
            nativeTokenWrapper
        );

        emit NewBid(
            _targetAuction.auctionId,
            _incomingBid.bidder,
            _targetAuction.assetContract,
            _incomingBid.bidAmount,
            _targetAuction
        );
    }

    function _isNewWinningBid(
        uint256 _minimumBidAmount,
        uint256 _currentWinningBidAmount,
        uint256 _incomingBidAmount,
        uint256 _bidBufferBps
    ) internal pure returns (bool isValidNewBid) {
        if (_currentWinningBidAmount == 0) {
            isValidNewBid = _incomingBidAmount >= _minimumBidAmount;
        } else {
            isValidNewBid = (_incomingBidAmount > _currentWinningBidAmount &&
                ((_incomingBidAmount - _currentWinningBidAmount) * MAX_BPS) / _currentWinningBidAmount >=
                _bidBufferBps);
        }
    }

    function _englishAuctionsStorage() internal pure returns (EnglishAuctionsStorage.Data storage data) {
        data = EnglishAuctionsStorage.data();
    }
}

