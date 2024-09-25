from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class Auction(BaseModel):
    nft_id: int
    starting_bid: float
    end_time: datetime
    wallet_address: str


class AuctionResponse(Auction):
    highest_bid: Optional[float] = None
    highest_bidder_id: Optional[int] = None
    seller_id: int
    created_at: datetime
