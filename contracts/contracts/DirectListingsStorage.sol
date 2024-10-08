// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import { IDirectListings } from "../IMarketplace.sol";

library DirectListingsStorage {
    ///keccak256(abi.encode(uint256(keccak256("direct.listings.storage")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 public constant DIRECT_LISTINGS_STORAGE_POSITION =
        0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

    struct Data {
        uint256 totalListings;
        mapping(uint256 => IDirectListings.Listing) listings;
        mapping(uint256 => mapping(address => bool)) isBuyerApprovedForListing;
        mapping(uint256 => mapping(address => uint256)) currencyPriceForListing;
    }

    function data() internal pure returns (Data storage data_) {
        bytes32 position = DIRECT_LISTINGS_STORAGE_POSITION;
        assembly {
            data_.slot := position
        }
    }
}
