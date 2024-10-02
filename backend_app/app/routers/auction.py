from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.services import verify_signature
from datetime import datetime


router = APIRouter()


@router.post("/auctions/create")
def create_auction(
    nft_id: int,
    seller_wallet: str,
    starting_bid: float,
    end_time: datetime,
    db: Session = Depends(get_db)
):
    new_auction = models.Auction(
        nft_id=nft_id,
        seller_wallet=seller_wallet,
        starting_bid=starting_bid,
        end_time=end_time
    )
    db.add(new_auction)
    db.commit()
    db.refresh(new_auction)
    return {"message": "Auction created", "auction": new_auction}


@router.post("/auctions/{auction_id}/finalize")
def finalize_auction(
        auction_id: int,
        highest_bid: float,
        highest_bidder_wallet: str,
        db: Session = Depends(get_db)
):
    auction = db.query(models.Auction).filter_by(id=auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Auction not found")

    auction.highest_bid = highest_bid
    auction.highest_bidder_wallet = highest_bidder_wallet
    auction.status = "finalized"
    auction.finalized_at = datetime.now()

    db.commit()
    return {"message": "Auction finalized", "auction": auction}


@router.get("/auctions/{auction_id}")
def get_auction(auction_id: int, db: Session = Depends(get_db)):
    auction = db.query(models.Auction).filter_by(id=auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Auction not found")
    return auction


@router.get("/auctions/")
def get_all_auctions(db: Session = Depends(get_db)):
    auctions = db.query(models.Auction).all()
    return auctions


