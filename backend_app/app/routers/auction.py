from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas.auction import Auction
from app.services import verify_signature
from app.services.auction import finalize_auction, place_bid

router = APIRouter()


@router.post("/auctions/")
def create_auction(auction: Auction, db: Session = Depends(get_db), signature: str = None):
    message = "Sign this message to create an auction"
    if not verify_signature(message, signature, auction.wallet_address):
        raise HTTPException(status_code=401, detail="Invalid signature")

    nft = db.query(models.NFT).filter_by(id=auction.nft_id).first()
    if not nft:
        raise HTTPException(status_code=404, detail="NFT not found")

    user = db.query(models.User).filter_by(wallet_address=auction.wallet_address).first()
    if nft.owner_id != user.id:
        raise HTTPException(status_code=403, detail="You are not the owner of this NFT")

    new_auction = models.Auction(nft_id=nft.id, seller_id=user.id, starting_bid=auction.starting_bid,
                                 end_time=auction.end_time)
    db.add(new_auction)
    db.commit()
    db.refresh(new_auction)

    return new_auction


@router.get("/auctions/")
def get_all_auctions(db: Session = Depends(get_db)):
    auctions = db.query(models.Auction).all()
    if not auctions:
        raise HTTPException(status_code=404, detail="No auctions found")
    return auctions


@router.get("/auctions/{auction_id}")
def get_auction_by_id(auction_id: int, db: Session = Depends(get_db)):
    auction = db.query(models.Auction).filter_by(id=auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Auction not found")
    return auction


@router.post("/auctions/{auction_id}/finalize")
def finalize(auction_id: int, db: Session = Depends(get_db)):
    return finalize_auction(auction_id, db)


@router.post("/auctions/{auction_id}/bid")
def bid(auction_id: int, bid_amount: float, wallet_address: str, db: Session = Depends(get_db)):
    return place_bid(auction_id, bid_amount, wallet_address, db)

