from pydantic import BaseModel
from typing import Optional


class UserUpdate(BaseModel):
    profile_nft_id: Optional[int] = None
    is_profile_nft_minted: Optional[bool] = None
