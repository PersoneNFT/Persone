from pydantic import BaseModel


class Collection(BaseModel):
    name: str
    description: str
    wallet_address: str
