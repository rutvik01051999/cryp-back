// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataStorage {
    string private data;
    bytes4 public storedData;

    function setData(string calldata _data) external {
        data = _data;
    }

    function getData() external view returns (string memory) {
        return data;
    }
    function retrieveData() public view returns (bytes4) {
        return storedData;
    }
}
