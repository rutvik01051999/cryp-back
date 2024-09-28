// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CryptoTransfer {
    event Transfer(address indexed from, address indexed to, uint256 amount);

    function transferFunds(address payable _to) external payable {
        require(msg.value > 0, "Transfer amount must be greater than zero");
        _to.transfer(msg.value);
        emit Transfer(msg.sender, _to, msg.value);
    }
}
