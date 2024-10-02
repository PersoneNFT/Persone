from web3 import Web3

# Initialize Web3 with your provider (e.g., Infura)
w3 = Web3(Web3.HTTPProvider('https://rpc.soneium.io'))

# TODO: add actual values
contract_abi = [
    {
        "constant": True,
        "inputs": [{"name": "tokenId", "type": "uint256"}],
        "name": "ownerOf",
        "outputs": [{"name": "", "type": "address"}],
        "type": "function"
    }
]

contract_address = '0xYourContractAddress'
contract = w3.eth.contract(address=contract_address, abi=contract_abi)


# Fetch NFT details from the blockchain
def fetch_nft_data(token_id: int):
    owner = contract.functions.ownerOf(token_id).call()
    metadata_url = contract.functions.tokenURI(token_id).call()
    return {"owner": owner, "metadata_url": metadata_url}
