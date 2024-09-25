from sqlalchemy import Column, Integer, String, ForeignKey, DECIMAL, TIMESTAMP, Boolean
from app.database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    wallet_address = Column(String(42), unique=True, nullable=False)
    profile_nft_id = Column(Integer, ForeignKey("nfts.id"), nullable=True)
    is_profile_nft_minted = Column(Boolean, default=False)
    created_at = Column(TIMESTAMP, default="now()")


class Collection(Base):
    __tablename__ = "collections"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    owner_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(TIMESTAMP, default="now()")


class NFT(Base):
    __tablename__ = "nfts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    metadata_url = Column(String, nullable=True)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    collection_id = Column(Integer, ForeignKey("collections.id"), nullable=True)
    created_at = Column(TIMESTAMP, default="now()")


class Auction(Base):
    __tablename__ = "auctions"
    id = Column(Integer, primary_key=True, index=True)
    nft_id = Column(Integer, ForeignKey("nfts.id"), nullable=False)
    seller_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    starting_bid = Column(DECIMAL(18, 2), nullable=False)
    highest_bid = Column(DECIMAL(18, 2), nullable=True)
    # highest_bidder_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    end_time = Column(TIMESTAMP, nullable=False)
    created_at = Column(TIMESTAMP, default="now()")


class SaleListing(Base):
    __tablename__ = 'sale_listings'

    id = Column(Integer, primary_key=True, index=True)
    nft_id = Column(Integer, ForeignKey("nfts.id"), nullable=False)
    seller_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    price = Column(DECIMAL(18, 2), nullable=False)
    listed_at = Column(TIMESTAMP, default="now()")
