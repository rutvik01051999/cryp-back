require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // sepolia: {
    //   url: 'https://eth-sepolia.g.alchemy.com/v2/IL8NMntyVlpwro5pi0J1gm1ORMNmQYMi',
    //   accounts: [`0x34394564e6ab098980ff4daca51413df3b5a77ed64dd9dfc7c174ff9452333e6`] // Use your private key
    // },
  },

};
