// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageStorage {
    event ImageStored(address indexed owner, string ipfsHash);

    struct Image {
        address owner;
        string ipfsHash;
    }

    mapping(uint256 => Image) public images;
    uint256 public imageCount;

    // Function to store the IPFS hash of an image
    function storeImage(string memory _ipfsHash) public {
        images[imageCount] = Image(msg.sender, _ipfsHash);
        emit ImageStored(msg.sender, _ipfsHash);
        imageCount++;
    }

    // Function to retrieve the image data by ID
    function getImage(uint256 _id) public view returns (address, string memory) {
        Image memory img = images[_id];
        return (img.owner, img.ipfsHash);
    }
}
