const PatoCoin = artifacts.require('PatoCoin')


module.exports = function(deployer) {
  deployer.deploy(PatoCoin, accounts[0])
}

