// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract DataStorage {
//     string private data;
//     bytes4 public storedData;

//     function setData(string calldata _data) external {
//         data = _data;
//     }

//     function getData() external view returns (string memory) {
//         return data;
//     }
//     function retrieveData() public view returns (bytes4) {
//         return storedData;
//     }
// }

contract DataStorage {
    uint256 public data;
    string public imageHash;

    function setData(uint256 _data) public {
        data = _data;
    }

    function retrieveData() public view returns (uint256) {
        return data;
    }

    function setImageHash(string memory _imageHash) public {
        imageHash = _imageHash;
    }

    function getImageHash() public view returns (string memory) {
        return imageHash;
    }
}
