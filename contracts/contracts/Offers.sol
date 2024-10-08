// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import "./OffersStorage.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "/eip/interface/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "/extension/interface/IPlatformFee.sol";
import "/extension/upgradeable/ReentrancyGuard.sol";
import "/extension/upgradeable/PermissionsEnumerable.sol";

contract OffersLogic is IOffers, ReentrancyGuard {
    bytes32 private constant ASSET_ROLE = keccak256("ASSET_ROLE");
    uint64 private constant MAX_BPS = 10_000;

    modifier onlyAssetRole(address _asset) {
        require(Permissions(address(this)).hasRoleWithSwitch(ASSET_ROLE, _asset), "!ASSET_ROLE");
        _;
    }

    modifier onlyOfferor(uint256 _offerId) {
        require(_offersStorage().offers[_offerId].offeror == _msgSender(), "!Offeror");
        _;
    }

    modifier onlyExistingOffer(uint256 _offerId) {
        require(_offersStorage().offers[_offerId].status == IOffers.Status.CREATED, "Marketplace: invalid offer.");
        _;
    }

    constructor() {}

    function makeOffer(
        OfferParams memory _params
    ) external onlyAssetRole(_params.assetContract) returns (uint256 _offerId) {
        _offerId = _getNextOfferId();
        address _offeror = _msgSender();
        TokenType _tokenType = _getTokenType(_params.assetContract);

        _validateNewOffer(_params, _tokenType);

        Offer memory _offer = Offer({
            offerId: _offerId,
            offeror: _offeror,
            assetContract: _params.assetContract,
            tokenId: _params.tokenId,
            tokenType: _tokenType,
            quantity: _params.quantity,
            currency: _params.currency,
            totalPrice: _params.totalPrice,
            expirationTimestamp: _params.expirationTimestamp,
            status: IOffers.Status.CREATED
        });

        _offersStorage().offers[_offerId] = _offer;

        emit NewOffer(_offeror, _offerId, _params.assetContract, _offer);
    }

    function cancelOffer(uint256 _offerId) external onlyExistingOffer(_offerId) onlyOfferor(_offerId) {
        _offersStorage().offers[_offerId].status = IOffers.Status.CANCELLED;

        emit CancelledOffer(_msgSender(), _offerId);
    }

    function acceptOffer(uint256 _offerId) external nonReentrant onlyExistingOffer(_offerId) {
        Offer memory _targetOffer = _offersStorage().offers[_offerId];

        require(_targetOffer.expirationTimestamp > block.timestamp, "EXPIRED");

        require(
            _validateERC20BalAndAllowance(_targetOffer.offeror, _targetOffer.currency, _targetOffer.totalPrice),
            "Marketplace: insufficient currency balance."
        );

        _validateOwnershipAndApproval(
            _msgSender(),
            _targetOffer.assetContract,
            _targetOffer.tokenId,
            _targetOffer.quantity,
            _targetOffer.tokenType
        );

        _offersStorage().offers[_offerId].status = IOffers.Status.COMPLETED;

        _payout(_targetOffer.offeror, _msgSender(), _targetOffer.currency, _targetOffer.totalPrice, _targetOffer);
        _transferOfferTokens(_msgSender(), _targetOffer.offeror, _targetOffer.quantity, _targetOffer);

        emit AcceptedOffer(
            _targetOffer.offeror,
            _targetOffer.offerId,
            _targetOffer.assetContract,
            _targetOffer.tokenId,
            _msgSender(),
            _targetOffer.quantity,
            _targetOffer.totalPrice
        );
    }

    function totalOffers() public view returns (uint256) {
        return _offersStorage().totalOffers;
    }

    function getOffer(uint256 _offerId) external view returns (Offer memory _offer) {
        _offer = _offersStorage().offers[_offerId];
    }

    function getAllOffers(uint256 _startId, uint256 _endId) external view returns (Offer[] memory _allOffers) {
        require(_startId <= _endId && _endId < _offersStorage().totalOffers, "invalid range");

        _allOffers = new Offer[](_endId - _startId + 1);

        for (uint256 i = _startId; i <= _endId; i += 1) {
            _allOffers[i - _startId] = _offersStorage().offers[i];
        }
    }

    function getAllValidOffers(uint256 _startId, uint256 _endId) external view returns (Offer[] memory _validOffers) {
        require(_startId <= _endId && _endId < _offersStorage().totalOffers, "invalid range");

        Offer[] memory _offers = new Offer[](_endId - _startId + 1);
        uint256 _offerCount;

        for (uint256 i = _startId; i <= _endId; i += 1) {
            uint256 j = i - _startId;
            _offers[j] = _offersStorage().offers[i];
            if (_validateExistingOffer(_offers[j])) {
                _offerCount += 1;
            }
        }

        _validOffers = new Offer[](_offerCount);
        uint256 index = 0;
        uint256 count = _offers.length;
        for (uint256 i = 0; i < count; i += 1) {
            if (_validateExistingOffer(_offers[i])) {
                _validOffers[index++] = _offers[i];
            }
        }
    }

    function _getNextOfferId() internal returns (uint256 id) {
        id = _offersStorage().totalOffers;
        _offersStorage().totalOffers += 1;
    }

    function _getTokenType(address _assetContract) internal view returns (TokenType tokenType) {
        if (IERC165(_assetContract).supportsInterface(type(IERC1155).interfaceId)) {
            tokenType = TokenType.ERC1155;
        } else if (IERC165(_assetContract).supportsInterface(type(IERC721).interfaceId)) {
            tokenType = TokenType.ERC721;
        } else {
            revert("Marketplace: token must be ERC1155 or ERC721.");
        }
    }

    function _validateNewOffer(OfferParams memory _params, TokenType _tokenType) internal view {
        require(_params.totalPrice > 0, "zero price.");
        require(_params.quantity > 0, "Marketplace: wanted zero tokens.");
        require(_params.quantity == 1 || _tokenType == TokenType.ERC1155, "Marketplace: wanted invalid quantity.");
        require(
            _params.expirationTimestamp + 60 minutes > block.timestamp,
            "Marketplace: invalid expiration timestamp."
        );

        require(
            _validateERC20BalAndAllowance(_msgSender(), _params.currency, _params.totalPrice),
            "Marketplace: insufficient currency balance."
        );
    }

    function _validateExistingOffer(Offer memory _targetOffer) internal view returns (bool isValid) {
        isValid =
            _targetOffer.expirationTimestamp > block.timestamp &&
            _targetOffer.status == IOffers.Status.CREATED &&
            _validateERC20BalAndAllowance(_targetOffer.offeror, _targetOffer.currency, _targetOffer.totalPrice);
    }

    function _validateOwnershipAndApproval(
        address _tokenOwner,
        address _assetContract,
        uint256 _tokenId,
        uint256 _quantity,
        TokenType _tokenType
    ) internal view {
        address market = address(this);
        bool isValid;

        if (_tokenType == TokenType.ERC1155) {
            isValid =
                IERC1155(_assetContract).balanceOf(_tokenOwner, _tokenId) >= _quantity &&
                IERC1155(_assetContract).isApprovedForAll(_tokenOwner, market);
        } else if (_tokenType == TokenType.ERC721) {
            isValid =
                IERC721(_assetContract).ownerOf(_tokenId) == _tokenOwner &&
                (IERC721(_assetContract).getApproved(_tokenId) == market ||
                    IERC721(_assetContract).isApprovedForAll(_tokenOwner, market));
        }

        require(isValid, "Marketplace: not owner or approved tokens.");
    }

    function _validateERC20BalAndAllowance(
        address _tokenOwner,
        address _currency,
        uint256 _amount
    ) internal view returns (bool isValid) {
        isValid =
            IERC20(_currency).balanceOf(_tokenOwner) >= _amount &&
            IERC20(_currency).allowance(_tokenOwner, address(this)) >= _amount;
    }

    function _transferOfferTokens(address _from, address _to, uint256 _quantity, Offer memory _offer) internal {
        if (_offer.tokenType == TokenType.ERC1155) {
            IERC1155(_offer.assetContract).safeTransferFrom(_from, _to, _offer.tokenId, _quantity, "");
        } else if (_offer.tokenType == TokenType.ERC721) {
            IERC721(_offer.assetContract).safeTransferFrom(_from, _to, _offer.tokenId, "");
        }
    }

function _payout(
    address _payer,
    address _payee,
    address _currencyToUse,
    uint256 _totalPayoutAmount,
    Offer memory _offer
) internal {
    uint256 amountRemaining;

    // Calculate platform fee
    (address platformFeeRecipient, uint16 platformFeeBps) = IPlatformFee(address(this)).getPlatformFeeInfo();
    uint256 platformFeeCut = (_totalPayoutAmount * platformFeeBps) / MAX_BPS;

    // Transfer platform fee
    CurrencyTransferLib.transferCurrencyWithWrapper(
        _currencyToUse,
        _payer,
        platformFeeRecipient,
        platformFeeCut,
        address(0)
    );

    // Transfer remaining amount to the seller
    amountRemaining = _totalPayoutAmount - platformFeeCut;

    CurrencyTransferLib.transferCurrencyWithWrapper(_currencyToUse, _payer, _payee, amountRemaining, address(0));
}


    function _offersStorage() internal pure returns (OffersStorage.Data storage data) {
        data = OffersStorage.data();
    }
}
