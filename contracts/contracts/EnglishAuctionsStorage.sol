// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import { IEnglishAuctions } from "../IMarketplace.sol";

library EnglishAuctionsStorage {

    /// keccak256(abi.encode(uint256(keccak256("english.auctions.storage")) - 1)) & ~bytes32(uint256(0xff))
    bytes32 public constant ENGLISH_AUCTIONS_STORAGE_POSITION =
        0xfffffffffffffffffffffffffffffffffffffffffffffffffffffff;

    struct Data {
        uint256 totalAuctions;
        mapping(uint256 => IEnglishAuctions.Auction) auctions;
        mapping(uint256 => IEnglishAuctions.Bid) winningBid;
        mapping(uint256 => IEnglishAuctions.AuctionPayoutStatus) payoutStatus;
    }

    function data() internal pure returns (Data storage data_) {
        bytes32 position = ENGLISH_AUCTIONS_STORAGE_POSITION;
        assembly {
            data_.slot := position
        }
    }
}
