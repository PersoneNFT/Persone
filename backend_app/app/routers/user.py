from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas.user import UserUpdate

router = APIRouter()


@router.get("/user/{wallet_address}")
def get_user(wallet_address: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(wallet_address=wallet_address).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.put("/user/{wallet_address}")
def update_user_profile(wallet_address: str, user_data: UserUpdate, db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(wallet_address=wallet_address).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if user_data.profile_nft_id is not None:
        nft = db.query(models.NFT).filter_by(id=user_data.profile_nft_id).first()
        if not nft or nft.owner_id != user.id:
            raise HTTPException(status_code=403, detail="Invalid NFT or not owned by user")
        user.profile_nft_id = user_data.profile_nft_id

    if user_data.is_profile_nft_minted is not None:
        user.is_profile_nft_minted = user_data.is_profile_nft_minted

    db.commit()
    return user
