// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;


import { IOffers } from "../IMarketplace.sol";

library OffersStorage {
    /// keccak256(abi.encode(uint256(keccak256("offers.storage")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 public constant OFFERS_STORAGE_POSITION =
        0xfffffffffffffffffffffffffffffffffffffffffffffffff;

    struct Data {
        uint256 totalOffers;
        mapping(uint256 => IOffers.Offer) offers;
    }

    function data() internal pure returns (Data storage data_) {
        bytes32 position = OFFERS_STORAGE_POSITION;
        assembly {
            data_.slot := position
        }
    }
}
