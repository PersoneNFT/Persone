// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

pragma solidity ^0.8.11;

interface IDirectListings {
    enum TokenType {
        ERC721,
        ERC1155
    }

    enum Status {
        UNSET,
        CREATED,
        COMPLETED,
        CANCELLED
    }

    struct ListingParameters {
        address assetContract;
        uint256 tokenId;
        uint256 quantity;
        address currency;
        uint256 pricePerToken;
        uint128 startTimestamp;
        uint128 endTimestamp;
        bool reserved;
    }

    struct Listing {
        uint256 listingId;
        uint256 tokenId;
        uint256 quantity;
        uint256 pricePerToken;
        uint128 startTimestamp;
        uint128 endTimestamp;
        address listingCreator;
        address assetContract;
        address currency;
        TokenType tokenType;
        Status status;
        bool reserved;
    }

    event NewListing(
        address indexed listingCreator,
        uint256 indexed listingId,
        address indexed assetContract,
        Listing listing
    );

    event UpdatedListing(
        address indexed listingCreator,
        uint256 indexed listingId,
        address indexed assetContract,
        Listing listing
    );

    event CancelledListing(address indexed listingCreator, uint256 indexed listingId);

    event BuyerApprovedForListing(uint256 indexed listingId, address indexed buyer, bool approved);

    event CurrencyApprovedForListing(uint256 indexed listingId, address indexed currency, uint256 pricePerToken);

    event NewSale(
        address indexed listingCreator,
        uint256 indexed listingId,
        address indexed assetContract,
        uint256 tokenId,
        address buyer,
        uint256 quantityBought,
        uint256 totalPricePaid
    );

    function createListing(ListingParameters memory _params) external returns (uint256 listingId);

    function updateListing(uint256 _listingId, ListingParameters memory _params) external;

    function cancelListing(uint256 _listingId) external;

    function approveBuyerForListing(uint256 _listingId, address _buyer, bool _toApprove) external;

    function approveCurrencyForListing(
        uint256 _listingId,
        address _currency,
        uint256 _pricePerTokenInCurrency
    ) external;

    function buyFromListing(
        uint256 _listingId,
        address _buyFor,
        uint256 _quantity,
        address _currency,
        uint256 _expectedTotalPrice
    ) external payable;

    function totalListings() external view returns (uint256);

    function getAllListings(uint256 _startId, uint256 _endId) external view returns (Listing[] memory listings);

    function getAllValidListings(uint256 _startId, uint256 _endId) external view returns (Listing[] memory listings);

    function getListing(uint256 _listingId) external view returns (Listing memory listing);
}

interface IEnglishAuctions {
    enum TokenType {
        ERC721,
        ERC1155
    }

    enum Status {
        UNSET,
        CREATED,
        COMPLETED,
        CANCELLED
    }

    struct AuctionParameters {
        address assetContract;
        uint256 tokenId;
        uint256 quantity;
        address currency;
        uint256 minimumBidAmount;
        uint256 buyoutBidAmount;
        uint64 timeBufferInSeconds;
        uint64 bidBufferBps;
        uint64 startTimestamp;
        uint64 endTimestamp;
    }

    struct Auction {
        uint256 auctionId;
        uint256 tokenId;
        uint256 quantity;
        uint256 minimumBidAmount;
        uint256 buyoutBidAmount;
        uint64 timeBufferInSeconds;
        uint64 bidBufferBps;
        uint64 startTimestamp;
        uint64 endTimestamp;
        address auctionCreator;
        address assetContract;
        address currency;
        TokenType tokenType;
        Status status;
    }

    struct Bid {
        uint256 auctionId;
        address bidder;
        uint256 bidAmount;
    }

    struct AuctionPayoutStatus {
        bool paidOutAuctionTokens;
        bool paidOutBidAmount;
    }

    event NewAuction(
        address indexed auctionCreator,
        uint256 indexed auctionId,
        address indexed assetContract,
        Auction auction
    );

    event NewBid(
        uint256 indexed auctionId,
        address indexed bidder,
        address indexed assetContract,
        uint256 bidAmount,
        Auction auction
    );

    event CancelledAuction(address indexed auctionCreator, uint256 indexed auctionId);

    event AuctionClosed(
        uint256 indexed auctionId,
        address indexed assetContract,
        address indexed closer,
        uint256 tokenId,
        address auctionCreator,
        address winningBidder
    );

    function createAuction(AuctionParameters memory _params) external returns (uint256 auctionId);

    function cancelAuction(uint256 _auctionId) external;

    function collectAuctionPayout(uint256 _auctionId) external;

    function collectAuctionTokens(uint256 _auctionId) external;

    function bidInAuction(uint256 _auctionId, uint256 _bidAmount) external payable;

    function isNewWinningBid(uint256 _auctionId, uint256 _bidAmount) external view returns (bool);

    function getAuction(uint256 _auctionId) external view returns (Auction memory auction);

    function getAllAuctions(uint256 _startId, uint256 _endId) external view returns (Auction[] memory auctions);

    function getAllValidAuctions(uint256 _startId, uint256 _endId) external view returns (Auction[] memory auctions);

    function getWinningBid(
        uint256 _auctionId
    ) external view returns (address bidder, address currency, uint256 bidAmount);

    function isAuctionExpired(uint256 _auctionId) external view returns (bool);
}

interface IOffers {
    enum TokenType {
        ERC721,
        ERC1155,
        ERC20
    }

    enum Status {
        UNSET,
        CREATED,
        COMPLETED,
        CANCELLED
    }

    struct OfferParams {
        address assetContract;
        uint256 tokenId;
        uint256 quantity;
        address currency;
        uint256 totalPrice;
        uint256 expirationTimestamp;
    }

    struct Offer {
        uint256 offerId;
        uint256 tokenId;
        uint256 quantity;
        uint256 totalPrice;
        uint256 expirationTimestamp;
        address offeror;
        address assetContract;
        address currency;
        TokenType tokenType;
        Status status;
    }

    event NewOffer(address indexed offeror, uint256 indexed offerId, address indexed assetContract, Offer offer);

    event CancelledOffer(address indexed offeror, uint256 indexed offerId);

    event AcceptedOffer(
        address indexed offeror,
        uint256 indexed offerId,
        address indexed assetContract,
        uint256 tokenId,
        address seller,
        uint256 quantityBought,
        uint256 totalPricePaid
    );

    function makeOffer(OfferParams memory _params) external returns (uint256 offerId);

    function cancelOffer(uint256 _offerId) external;

    function acceptOffer(uint256 _offerId) external;

    function getOffer(uint256 _offerId) external view returns (Offer memory offer);

    function getAllOffers(uint256 _startId, uint256 _endId) external view returns (Offer[] memory offers);

    function getAllValidOffers(uint256 _startId, uint256 _endId) external view returns (Offer[] memory offers);
}
