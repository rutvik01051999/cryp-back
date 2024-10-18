// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NftSign {
    string public storedString;

    // Constructor to initialize the string (optional)
    constructor(string memory initialString) {
        storedString = initialString;
    }

    // Function to set the string value
    function setString(string memory newString) public {
        storedString = newString;
    }

    // Function to get the string value (already public)
    function getString() public view returns (string memory) {
        return storedString;
    }
}
