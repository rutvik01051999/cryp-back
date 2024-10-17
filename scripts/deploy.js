const hre = require("hardhat");

async function main() {


    const DataStorage = await ethers.getContractFactory("DataStorage");
    const dataStorage = await DataStorage.deploy();
    await dataStorage.deployed();
    console.log("DataStorage deployed to:", dataStorage.address);

    const ImageStorage = await ethers.getContractFactory("ImageStorage");
    const imageStorage = await ImageStorage.deploy();
    await imageStorage.deployed();

    console.log("ImageStorage contract deployed to:", imageStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
