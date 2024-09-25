from fastapi import FastAPI
from app.routers import nft, collection, user, auction

app = FastAPI()

app.include_router(nft.router, tags=["NFT"])
app.include_router(collection.router, tags=["Collections"])
app.include_router(user.router, tags=["User"])
app.include_router(auction.router, tags=["Auctions"])
