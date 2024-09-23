from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas.nft import NFT
from app.services import verify_signature

router = APIRouter()


@router.post("/nft/")
def create_nft(nft: NFT, db: Session = Depends(get_db), signature: str = None):
    message = "Sign this message to mint an NFT"
    if not verify_signature(message, signature, nft.wallet_address):
        raise HTTPException(status_code=401, detail="Invalid signature")

    user = db.query(models.User).filter_by(wallet_address=nft.wallet_address).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    new_nft = models.NFT(name=nft.name, metadata_url=nft.metadata_url, owner_id=user.id, collection_id=nft.collection_id)
    db.add(new_nft)
    db.commit()
    db.refresh(new_nft)
    return new_nft


@router.get("/nft/")
def list_nfts(db: Session = Depends(get_db)):
    return db.query(models.NFT).all()
