from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas.user import UserUpdate, AuthPayload
from app.services.verify_signature import verify_signature

router = APIRouter()


@router.post("/user/")
def create_user(wallet_address: str, db: Session = Depends(get_db)):
    # Check if the user already exists
    user = db.query(models.User).filter_by(wallet_address=wallet_address).first()
    if user:
        raise HTTPException(status_code=400, detail="User already exists")

    # Create a new user
    new_user = models.User(wallet_address=wallet_address)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created successfully", "user": new_user}


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


@router.post("/auth")
async def authenticate_user(payload: AuthPayload):
    verify_signature(payload.message, payload.signature, payload.address)
    return {"message": "Authenticated", "address": payload.address}

