from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from app.schemas.nft import NFT
from app.services import verify_signature
from pydantic import BaseModel

router = APIRouter()


class CreateNFTRequest(BaseModel):
    tokenId: int
    owner: str
    metadata_url: str


class CreateSaleListingRequest(BaseModel):
    nft_id: int
    price: float


@router.post("/nft/fetch")
def add_nft_from_blockchain(data: CreateNFTRequest, db: Session = Depends(get_db)):
    # Check if the owner exists in the marketplace database
    owner = db.query(models.User).filter_by(wallet_address=data.owner).first()
    if not owner:
        raise HTTPException(status_code=404, detail="Owner not found in the marketplace")

    # Add the NFT to the database
    new_nft = models.NFT(
        id=data.tokenId,
        metadata_url=data.metadata_url,
        owner_id=owner.id
    )
    db.add(new_nft)
    db.commit()
    return new_nft


@router.post("/nft/mint_profile")
def mint_profile_nft(nft: NFT, db: Session = Depends(get_db), signature: str = None):
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

    # Update the user profile NFT-related fields
    user.profile_nft_id = new_nft.id
    user.is_profile_nft_minted = True
    db.commit()

    return {"message": "Profile NFT minted successfully", "nft": new_nft}


# List all NFTs in a specific collection
@router.get("/nft/{collection_id}")
def list_nfts_by_collection(collection_id: int, db: Session = Depends(get_db)):
    nfts = db.query(models.NFT).filter_by(collection_id=collection_id).all()
    if not nfts:
        raise HTTPException(status_code=404, detail="No NFTs found in this collection")
    return nfts

# Get a specific NFT by ID


@router.get("/nft/id/{nft_id}")
def get_nft_by_id(nft_id: int, db: Session = Depends(get_db)):
    nft = db.query(models.NFT).filter_by(id=nft_id).first()
    if not nft:
        raise HTTPException(status_code=404, detail="NFT not found")
    return nft


router.post("/nft/list_for_sale")


def list_nft_for_sale(data: CreateSaleListingRequest, db: Session = Depends(get_db)):
    # Check if the NFT exists
    nft = db.query(models.NFT).filter_by(id=data.nft_id).first()
    if not nft:
        raise HTTPException(status_code=404, detail="NFT not found")

    # Check if the seller is the owner of the NFT
    seller = db.query(models.User).filter_by(id=nft.owner_id).first()
    if not seller:
        raise HTTPException(status_code=404, detail="Seller not found")

    # Create a sale listing
    sale_listing = models.SaleListing(
        nft_id=nft.id,
        seller_id=seller.id,
        price=data.price
    )

    db.add(sale_listing)
    db.commit()

    return {"message": "NFT listed for sale successfully", "nft_id": nft.id, "price": data.price}


@router.post("/nft/buy/{sale_listing_id}")
def buy_nft(sale_listing_id: int, buyer_wallet: str, db: Session = Depends(get_db)):
    # Find the sale listing
    sale_listing = db.query(models.SaleListing).filter_by(id=sale_listing_id).first()
    if not sale_listing:
        raise HTTPException(status_code=404, detail="Sale listing not found")

    # Find the buyer in the marketplace
    buyer = db.query(models.User).filter_by(wallet_address=buyer_wallet).first()
    if not buyer:
        raise HTTPException(status_code=404, detail="Buyer not found")

    # Find the NFT being sold
    nft = db.query(models.NFT).filter_by(id=sale_listing.nft_id).first()
    if not nft:
        raise HTTPException(status_code=404, detail="NFT not found")

    # Transfer ownership of the NFT to the buyer
    nft.owner_id = buyer.id

    # Remove the sale listing after the purchase
    db.delete(sale_listing)
    db.commit()

    return {"message": "NFT purchased successfully", "nft_id": nft.id, "new_owner": buyer.wallet_address}


@router.get("/nft/listings")
def get_all_listings(db: Session = Depends(get_db)):
    listings = db.query(models.SaleListing).all()
    if not listings:
        raise HTTPException(status_code=404, detail="No listings found")
    return listings


@router.get("/nft/listing/{listing_id}")
def get_listing_by_id(listing_id: int, db: Session = Depends(get_db)):
    listing = db.query(models.SaleListing).filter_by(id=listing_id).first()
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")
    return listing


@router.post("/nft/add_to_collection/{collection_id}")
def add_nft_to_collection(nft: NFT, collection_id: int, db: Session = Depends(get_db), signature: str = None):
    message = "Sign this message to add an NFT to the collection"
    if not verify_signature(message, signature, nft.wallet_address):
        raise HTTPException(status_code=401, detail="Invalid signature")

    # Find the user by wallet address
    user = db.query(models.User).filter_by(wallet_address=nft.wallet_address).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Find the collection
    collection = db.query(models.Collection).filter_by(id=collection_id).first()
    if not collection:
        raise HTTPException(status_code=404, detail="Collection not found")

    # Check if the user is the owner of the collection
    if collection.owner_id != user.id:
        raise HTTPException(status_code=403, detail="Only the owner of the collection can add NFTs to it")

    # Add NFT to the collection
    new_nft = models.NFT(
        name=nft.name,
        metadata_url=nft.metadata_url,
        owner_id=user.id,
        collection_id=collection.id
    )
    db.add(new_nft)
    db.commit()
    db.refresh(new_nft)

    return {"message": "NFT added to the collection", "nft": new_nft}
