require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.11", // Make sure it matches your Solidity version
  networks: {
    minato: {
      url: "https://rpc.minato.soneium.org/",
      chainId: 1946,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
