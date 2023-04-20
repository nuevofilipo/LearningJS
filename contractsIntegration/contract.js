// Import web3.js library
import Web3 from "web3";
// Create an instance of the web3 object
let web3;

// Check if Metamask is installed
if (typeof window.ethereum !== "undefined") {
  // Metamask is installed, so create a web3 provider using Metamask
  web3 = new Web3(window.ethereum);

  // Request access to the user's accounts
  window.ethereum.enable().catch((error) => {
    // Handle the error
    console.error(error);
  });
} else {
  // Metamask is not installed, so fallback to a local development network
  console.log("install metamask");
}

// Get the current account
web3.eth.getAccounts((error, accounts) => {
  if (error) {
    // Handle the error
    console.error(error);
  } else {
    // Get the current account address
    const account = accounts[0];

    // Update the paragraph element with the account address
    const paragraph = document.getElementById("account-address");
    paragraph.textContent = account;
  }
});
