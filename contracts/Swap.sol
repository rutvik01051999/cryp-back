// contracts/Swap.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Swap {
    IERC20 public mockBTC;

    uint256 public rate = 100; // 1 Ether = 100 MockBTC

    constructor(IERC20 _mockBTC) {
        mockBTC = _mockBTC;
    }

    function swapEtherForMockBTC() external payable {
        uint256 tokenAmount = msg.value * rate;
        require(mockBTC.balanceOf(address(this)) >= tokenAmount, "Not enough MockBTC in contract");
        mockBTC.transfer(msg.sender, tokenAmount);
    }

    // Add a function to withdraw Ether and remaining tokens if necessary
}
