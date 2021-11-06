const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  
  networks: {
   
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY
        ),

      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    development: {
      host: '127.0.0.1',     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: '*'       // Any network (default: none)
    },
    

    bscTestnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          "https://data-seed-prebsc-1-s1.binance.org:8545/"
        ),

      network_id: 97, // Ropsten's id
      confirmations: 1, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 35000
    },
    
  },

  plugins: [
    'truffle-plugin-verify'
 ],
 api_keys: {
    // etherscan: process.env.ETH_SCAN_API_KEY
    bscscan: process.env.BSC_SCAN_API_KEY
 },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    },
  },
};