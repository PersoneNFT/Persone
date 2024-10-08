async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MarketplaceV3 = await ethers.getContractFactory("MarketplaceV3");
  const marketplace = await MarketplaceV3.deploy();
  console.log("MarketplaceV3 deployed to:", marketplace.address);

  const OffersLogic = await ethers.getContractFactory("OffersLogic");
  const offersLogic = await OffersLogic.deploy();
  console.log("OffersLogic deployed to:", offersLogic.address);

  const EnglishAuctionsLogic = await ethers.getContractFactory("EnglishAuctionsLogic");
  const englishAuctions = await EnglishAuctionsLogic.deploy();
  console.log("EnglishAuctionsLogic deployed to:", englishAuctions.address);

  const DirectListingsLogic = await ethers.getContractFactory("DirectListingsLogic");
  const directListings = await DirectListingsLogic.deploy();
  console.log("DirectListingsLogic deployed to:", directListings.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
