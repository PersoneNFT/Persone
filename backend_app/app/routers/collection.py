from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional, List
from app.database import get_db
from app import models
from app.schemas.collection import Collection
from app.services import verify_signature

router = APIRouter()


@router.post("/collections/")
def create_collection(collection: Collection, db: Session = Depends(get_db), signature: str = None):
    message = "Sign this message to create a collection"
    if not verify_signature(message, signature, collection.wallet_address):
        raise HTTPException(status_code=401, detail="Invalid signature")

    user = db.query(models.User).filter_by(wallet_address=collection.wallet_address).first()
    if not user:
        user = models.User(wallet_address=collection.wallet_address)
        db.add(user)
        db.commit()
        db.refresh(user)

    new_collection = models.Collection(name=collection.name, description=collection.description, owner_id=user.id)
    db.add(new_collection)
    db.commit()
    db.refresh(new_collection)

    return new_collection


@router.get("/collections/", response_model=List[Collection])
def get_collections(
        name: Optional[str] = None,
        owner_id: Optional[int] = None,
        db: Session = Depends(get_db)
):
    query = db.query(models.Collection)

    if name:
        query = query.filter(models.Collection.name.ilike(f"%{name}%"))
    if owner_id:
        query = query.filter(models.Collection.owner_id == owner_id)

    return query.all()