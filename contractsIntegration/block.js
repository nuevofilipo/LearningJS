import Web3 from "web3";

let web3;
let address = "";

async function connectMeta() {
  await window.web3.currentProvider.enable();
  web3 = new Web3(window.web3.currentProvider);
}

if (typeof web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  web3 = new Web3(new Web3.Provider.HttpProvider("HTTP://127.0.0.1:8545"));
}

let abi = [
  [
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
  ],
];
let contract = new web3.eth.Contract(abi, address);

function depositTokens() {
  let inputval = document.getElementById("amount").value;
  web3.eth
    .getAccounts()
    .then(function (account) {
      return contract.methods.depositTokens(value).send({ from: account[0] });
    })
    .then(function (tmp) {
      $("#amount").val("");
    })
    .catch(function (tmp) {
      alert(tmp);
    });
}

function timesDeposited() {
  contract.methods
    .timesDeposited()
    .call()
    .then(function (balance) {
      $("#balance").html(balance);
    });
}
