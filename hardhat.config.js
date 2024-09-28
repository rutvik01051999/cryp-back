require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // seolia: {
    //   url: 'https://sepolia.infura.io/v3/6d986b0502ac45d4b4daf2e6821e0969',
    //   accounts: [`0x${YOUR_PRIVATE_KEY}`] // Use your private key
    // },
  },

};
