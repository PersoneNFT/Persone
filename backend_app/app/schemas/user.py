from pydantic import BaseModel
from typing import Optional


class UserUpdate(BaseModel):
    profile_nft_id: Optional[int] = None
    is_profile_nft_minted: Optional[bool] = None


class AuthPayload(BaseModel):
    address: str  # The wallet address of the user
    signature: str  # The signature created by signing the message
    message: str  # The message that was signed

