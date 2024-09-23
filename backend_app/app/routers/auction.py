from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas.auction import Auction
from app.services import verify_signature
from datetime import datetime

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
