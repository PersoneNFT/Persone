from pydantic import BaseModel
from typing import Optional


class NFT(BaseModel):
    name: str
    metadata_url: str
    wallet_address: str
    collection_id: Optional[int] = None
