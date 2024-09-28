const hre = require("hardhat");

async function main() {
    const CryptoTransfer = await hre.ethers.getContractFactory("CryptoTransfer");
    const cryptoTransfer = await CryptoTransfer.deploy();
    await cryptoTransfer.deployed();//deploying your smart contract
    console.log("Contract deployed to address:", cryptoTransfer.address);

    const DataStorage = await ethers.getContractFactory("DataStorage");
    const dataStorage = await DataStorage.deploy();
    await dataStorage.deployed();
    console.log("DataStorage deployed to:", dataStorage.address);


    // const NFT = await ethers.getContractFactory("MyNFT");
    // const nft = await NFT.deploy("MyNFT", "MNFT"); // Pass name and symbol for ERC721
    // console.log("NFT Contract deployed to:", nft.address);


    // const [deployer] = await ethers.getSigners();
    // console.log("Deploying contracts with the account:", deployer.address);
    // const initialSupply = ethers.utils.parseUnits('10000', 18); // 10,000 MockBTC
    // const MockBTC = await ethers.getContractFactory("MockBTC");
    // const mockBTC = await MockBTC.deploy(initialSupply);
    // console.log("MockBTC contract deployed to:", mockBTC.address);


    // const Swap = await ethers.getContractFactory("Swap");
    // const swap = await Swap.deploy(mockBTC.address);
    // await swap.deployed();
    // console.log("Swap contract deployed to:", swap.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
