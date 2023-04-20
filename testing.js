import Binance from "binance-api-node";

const Binance = require("binance-api-node").default;

const client = Binance({
  apiKey: "g4zAFZxX7pDPMBN18o6G3QnA9iIq8t2c2aN6wJd04bVxLD4m1CjFa00MetNh1ZHY",
  apiSecret: "J94e92tM5ukajdgkj0tHVY4EIBmkacbbey8FI6gFyj0aa3V0SjXTh29KKcO4lgWp",
});

// Get the current price of BTCUSDT
client
  .prices({ symbol: "BTCUSDT" })
  .then((prices) => {
    console.log(prices);
  })
  .catch((error) => {
    console.error(error);
  });
