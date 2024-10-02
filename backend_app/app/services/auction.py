from sqlalchemy.orm import Session
from app import models
from fastapi import HTTPException
from datetime import datetime


def finalize_auction(auction_id: int, db: Session):
    # Fetch auction from DB, transfer ownership using Soneium blockchain logic
    auction = db.query(models.Auction).filter_by(id=auction_id).first()
    nft = db.query(models.NFT).filter_by(id=auction.nft_id).first()
    transfer_nft_on_chain(nft.id, auction.highest_bidder_id)
    nft.owner_id = auction.highest_bidder_id
    db.commit()

