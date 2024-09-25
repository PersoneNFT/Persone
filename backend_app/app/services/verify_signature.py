from web3 import Web3

# TODO: proper signature verification


w3 = Web3(Web3.HTTPProvider('<YOUR_INFURA_ENDPOINT>'))


def verify_signature(message: str, signature: str, wallet_address: str) -> bool:
    message_hash = w3.keccak(text=message)
    recovered_address = w3.eth.account.recoverHash(message_hash, signature=signature)
    return recovered_address.lower() == wallet_address.lower()
