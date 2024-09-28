// contracts/MockBTC.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockBTC is ERC20 {
    constructor(uint256 initialSupply) ERC20("MockBitcoin", "MBTC") {
        _mint(msg.sender, initialSupply);
    }

    // You can add minting, burning or any logic if necessary
}
