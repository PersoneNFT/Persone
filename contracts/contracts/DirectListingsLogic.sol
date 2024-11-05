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

contract DirectListingsHandler is IDirectListings, ReentrancyGuard {
    bytes32 private constant ROLE_LISTER = keccak256("ROLE_LISTER");
    bytes32 private constant ROLE_ASSET = keccak256("ROLE_ASSET");
    uint64 private constant MAX_PERCENTAGE = 10_000;
    address private immutable tokenWrapper;

    modifier ensureListerRole() {
        require(Permissions(address(this)).hasRoleWithSwitch(ROLE_LISTER, msg.sender), "Not authorized: Lister role required");
        _;
    }

    modifier ensureAssetRole(address assetAddress) {
        require(Permissions(address(this)).hasRoleWithSwitch(ROLE_ASSET, assetAddress), "Not authorized: Asset role required");
        _;
    }

    modifier verifyListingOwner(uint256 listingId) {
        require(_retrieveDirectListings().listings[listingId].listingCreator == msg.sender, "Not authorized: Must be listing creator.");
        _;
    }

    modifier validateListingExists(uint256 listingId) {
        require(_retrieveDirectListings().listings[listingId].status == IDirectListings.Status.CREATED, "Listing does not exist or is inactive.");
        _;
    }

    constructor(address wrapperAddress) {
        tokenWrapper = wrapperAddress;
    }

    function initiateListing(
        ListingParameters calldata listingParams
    ) external ensureListerRole ensureAssetRole(listingParams.assetContract) returns (uint256 newListingId) {
        newListingId = _generateNewListingId();
        address creatorAddress = msg.sender;
        TokenType itemType = _identifyTokenType(listingParams.assetContract);

        uint128 startTimestamp = listingParams.startTimestamp;
        uint128 endTimestamp = listingParams.endTimestamp;

        require(startTimestamp < endTimestamp, "Invalid timestamps: End must be after start.");

        if (startTimestamp < block.timestamp) {
            require(startTimestamp + 1 hours >= block.timestamp, "Invalid start: Too old.");

            startTimestamp = uint128(block.timestamp);
            endTimestamp = (endTimestamp == type(uint128).max)
                ? endTimestamp
                : startTimestamp + (listingParams.endTimestamp - listingParams.startTimestamp);
        }

        _confirmNewListing(listingParams, itemType);

        Listing memory newListing = Listing({
            listingId: newListingId,
            listingCreator: creatorAddress,
            assetContract: listingParams.assetContract,
            tokenId: listingParams.tokenId,
            quantity: listingParams.quantity,
            currency: listingParams.currency,
            pricePerToken: listingParams.pricePerToken,
            startTimestamp: startTimestamp,
            endTimestamp: endTimestamp,
            itemType: itemType,
            status: IDirectListings.Status.CREATED
        });

        _retrieveDirectListings().listings[newListingId] = newListing;
        emit ListingCreated(newListingId, creatorAddress, listingParams.assetContract, listingParams.tokenId, listingParams.quantity);
    }

