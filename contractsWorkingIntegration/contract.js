let account;

//Connect MetaMask wallet
const connectMetamask = async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];
    document.getElementById("accountArea").innerHTML = account;
  }
};

const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "BUSD",
    outputs: [
      { internalType: "contract ERC20Token", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ENTRToken",
    outputs: [
      { internalType: "contract ERC20Token", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "IGToken",
    outputs: [
      { internalType: "contract ERC20Token", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "allPlayers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "depositTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "depositedBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "playerTimesDeposited",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "timesDeposited",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdrawalPlayers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const Address = "0x7d5A6F6313633Ba8DdbbE893f893761C90dab0eA";
//Connect contract
const connectContract = async () => {
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, Address);
  document.getElementById("contractArea").innerHTML =
    "connected to smart contract";
};

//3-read data from smart contract
const readContract = async () => {
  const address = account;
  console.log(account);
  window.contract = await new window.web3.eth.Contract(ABI, Address);
  const data = await window.contract.methods.timesDeposited(address).call();
  document.getElementById("dataArea").innerHTML =
    "times deposited: " + String(data);
};

const depositMoney = () => {
  let amount = document.getElementById("input1").value;
  console.log(amount);
};
