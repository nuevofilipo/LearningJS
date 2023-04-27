// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.7;


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
mapping(address => bool) public depositors;
mapping(address => uint256) public amountWon;

ERC20Token public BUSD = ERC20Token(0xbCe98d116cA02A87a2E6c8EDf9597CEd50f3B0a2);
address public Creator = 0x035dCD3b056BdDbf82273A1b93c7B8cd25614995;
bool public      rescueActive = false;


modifier onlyOwner() {
    require(msg.sender == Creator, "You are not  the creator of this contract");
    _;
}

function assignBUSDAddress(address _address) public onlyOwner {
    BUSD = ERC20Token(_address);
}

function activateRescue() public onlyOwner {
    rescueActive = true;
}

function deactivateRescue() public onlyOwner {
    rescueActive = false;
}

function increaseAmountWon(address _address, uint256 _amount) public onlyOwner {
    amountWon[_address] += _amount;
}


function deposit(uint256 _amount, uint256 _feePercentage) public{
    uint256 busdBalance = BUSD.balanceOf(address(msg.sender));
    require(_amount > 0, "You need to deposit more than 0");
    require(busdBalance >= _amount, "You don't have enough BUSD");


    BUSD.transferFrom(msg.sender, address(this), (_amount * (1 - (_feePercentage/100)))); // be careful, as you still will have to add the decimal zeros to the amount
    BUSD.transferFrom(msg.sender, Creator, (_amount * (_feePercentage/100))  ); // 10% of the amount goes to creator of contract))
    depositors[msg.sender] = true;
}


function withdraw() public{
    require(depositors[msg.sender]  == true , "You are not a depositor");
    require(amountWon[msg.sender] > 0 , "You have not won anything at all");
    uint256 _amount = amountWon[msg.sender];
    BUSD.transfer(msg.sender, _amount); // amount still needs to be given with the decimal zeros
    delete depositors[msg.sender];
    amountWon[msg.sender] -= _amount;
}

function rescue(uint256 _amount) public {
    require(rescueActive == true, "Rescue is not active");
    require(depositors[msg.sender] == true, "You are not a depositor");
    BUSD.transfer(msg.sender, _amount);
    delete depositors[msg.sender];
}

}


