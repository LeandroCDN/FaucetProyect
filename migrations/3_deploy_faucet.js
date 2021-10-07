const Faucet = artifacts.require("Faucet");
const PatoCoin = artifacts.require('PatoCoin');

module.exports = async function (deployer, network, accounts) {
  
  //deployer.deploy(Faucet, '0x65cc85C1D3C2d0ADF0641e19Ab98edcc25A9C22B', PatoCoin.address);

  deployer.deploy(Faucet, accounts[1], PatoCoin.address);
};