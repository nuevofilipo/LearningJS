// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


interface ERC20Token {
    //This interface defines several functions, which are often used when handling ERC-20 Tokens

    function balanceOf(address account) external view returns (uint256);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}




contract GameContract{

// Declaring certain things
mapping(address => bool) public callers;
ERC20Token public BUSD;

constructor() public {
    //The tokens addresses are assigned to some names
    BUSD = ERC20Token(0xbCe98d116cA02A87a2E6c8EDf9597CEd50f3B0a2);
    }


// Function to add a caller to the mapping
function addCaller() public {
    callers[msg.sender] = true;
}

// Function to check if an address exists in the mapping and delete it
function deleteCaller(address _caller) public {
    if (callers[_caller]) {
        delete callers[_caller];
    }
}
}