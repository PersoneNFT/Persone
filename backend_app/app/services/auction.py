from sqlalchemy.orm import Session
from app import models
from fastapi import HTTPException
from datetime import datetime


def finalize_auction(auction_id: int, db: Session):
    auction = db.query(models.Auction).filter_by(id=auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Auction not found")

    if auction.end_time > datetime.now():
        raise HTTPException(status_code=403, detail="Auction has not ended yet")

    if not auction.highest_bidder_id:
        raise HTTPException(status_code=404, detail="No bids placed")

    # Transfer NFT ownership
    nft = db.query(models.NFT).filter_by(id=auction.nft_id).first()
    nft.owner_id = auction.highest_bidder_id
    db.commit()

    return {"message": "Auction finalized. NFT transferred to the highest bidder"}


def place_bid(auction_id: int, bid_amount: float, wallet_address: str, db: Session):
    auction = db.query(models.Auction).filter_by(id=auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Auction not found")

    if auction.end_time < datetime.now():
        raise HTTPException(status_code=403, detail="Auction has ended")

    if bid_amount <= auction.highest_bid:
        raise HTTPException(status_code=403, detail="Bid amount must be higher than the current highest bid")

    user = db.query(models.User).filter_by(wallet_address=wallet_address).first()
    auction.highest_bid = bid_amount
    auction.highest_bidder_id = user.id
    db.commit()

    return {"message": "Bid placed successfully"}
