// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import "./DirectListingsStorage.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "../../../eip/interface/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../../extension/interface/IPlatformFee.sol";
import "../../../extension/upgradeable/ReentrancyGuard.sol";
import "../../../extension/upgradeable/PermissionsEnumerable.sol";
import { CurrencyTransferLib } from "../../../lib/CurrencyTransferLib.sol";

contract DirectListingsLogic is IDirectListings, ReentrancyGuard {
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

    modifier onlyListingCreator(uint256 _listingId) {
        require(
            _directListingsStorage().listings[_listingId].listingCreator == msg.sender,
            "Marketplace: not listing creator."
        );
        _;
    }

    modifier onlyExistingListing(uint256 _listingId) {
        require(
            _directListingsStorage().listings[_listingId].status == IDirectListings.Status.CREATED,
            "Marketplace: invalid listing."
        );
        _;
    }

    constructor(address _nativeTokenWrapper) {
        nativeTokenWrapper = _nativeTokenWrapper;
    }

    function createListing(
        ListingParameters calldata _params
    ) external onlyListerRole onlyAssetRole(_params.assetContract) returns (uint256 listingId) {
        listingId = _getNextListingId();
        address listingCreator = msg.sender;
        TokenType tokenType = _getTokenType(_params.assetContract);

        uint128 startTime = _params.startTimestamp;
        uint128 endTime = _params.endTimestamp;
        require(startTime < endTime, "Marketplace: endTimestamp not greater than startTimestamp.");
        if (startTime < block.timestamp) {
            require(startTime + 60 minutes >= block.timestamp, "Marketplace: invalid startTimestamp.");

            startTime = uint128(block.timestamp);
            endTime = endTime == type(uint128).max
                ? endTime
                : startTime + (_params.endTimestamp - _params.startTimestamp);
        }

        _validateNewListing(_params, tokenType);

        Listing memory listing = Listing({
            listingId: listingId,
            listingCreator: listingCreator,
            assetContract: _params.assetContract,
            tokenId: _params.tokenId,
            quantity: _params.quantity,
            currency: _params.currency,
            pricePerToken: _params.pricePerToken,
            startTimestamp: startTime,
            endTimestamp: endTime,
            reserved: _params.reserved,
            tokenType: tokenType,
            status: IDirectListings.Status.CREATED
        });

        _directListingsStorage().listings[listingId] = listing;

        emit NewListing(listingCreator, listingId, _params.assetContract, listing);
    }

    function _payout(
        address _payer,
        address _payee,
        address _currencyToUse,
        uint256 _totalPayoutAmount,
        Listing memory _listing
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

    function _validateNewListing(ListingParameters memory _params, TokenType _tokenType) internal view {
        require(_params.quantity > 0, "Marketplace: listing zero quantity.");
        require(_params.quantity == 1 || _tokenType == TokenType.ERC1155, "Marketplace: listing invalid quantity.");

        require(
            _validateOwnershipAndApproval(
                msg.sender,
                _params.assetContract,
                _params.tokenId,
                _params.quantity,
                _tokenType
            ),
            "Marketplace: not owner or approved tokens."
        );
    }

    function _getTokenType(address _assetContract) internal view returns (TokenType tokenType) {
        if (IERC165(_assetContract).supportsInterface(type(IERC1155).interfaceId)) {
            tokenType = TokenType.ERC1155;
        } else if (IERC165(_assetContract).supportsInterface(type(IERC721).interfaceId)) {
            tokenType = TokenType.ERC721;
        } else {
            revert("Marketplace: listed token must be ERC1155 or ERC721.");
        }
    }

    function _directListingsStorage() internal pure returns (DirectListingsStorage.Data storage data) {
        data = DirectListingsStorage.data();
    }
}
