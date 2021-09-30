const patoToken = artifacts.require('patoToken')

module.exports = function(deployer) {
  deployer.deploy(patoToken, 0x86271A765c26e73F184bB85dCf270BF83c288365)
}
