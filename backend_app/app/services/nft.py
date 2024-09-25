from web3 import Web3

# Initialize Web3 with your provider (e.g., Infura)
w3 = Web3(Web3.HTTPProvider('<YOUR_INFURA_ENDPOINT>'))

# Contract ABI and address
contract_abi = [ ... ]  # Your contract ABI here
contract_address = '0xYourContractAddress'
contract = w3.eth.contract(address=contract_address, abi=contract_abi)

# Fetch NFT details from the blockchain
def fetch_nft_data(token_id: int):
    owner = contract.functions.ownerOf(token_id).call()
    metadata_url = contract.functions.tokenURI(token_id).call()
    return {"owner": owner, "metadata_url": metadata_url}
