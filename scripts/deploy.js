const hre = require("hardhat");

async function main() {


    // const DataStorage = await ethers.getContractFactory("DataStorage");
    // const dataStorage = await DataStorage.deploy();
    // await dataStorage.deployed();
    // console.log("DataStorage deployed to:", dataStorage.address);

    const ImageStorage = await ethers.getContractFactory("NftSign");
    const nftSign = await ImageStorage.deploy();  // Here, "My NFT Sign" is the argument passed to the constructor
    await nftSign.deployed();
    console.log("ImageStorage contract deployed to:", nftSign.address);


    // const MyNFT = await ethers.getContractAt("NftSign", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    // const owner = await MyNFT.ownerOf("1");
    // console.log(owner);

    // const baseURI = "https://example.com/api/nft/";
    // const MyNFT = await ethers.getContractFactory("NftSign");
    // const myNFT = await MyNFT.deploy(baseURI);
    // console.log("NFT Contract deployed to:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
