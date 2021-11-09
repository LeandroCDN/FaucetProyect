class Chain {

  name = "-"
  id = "-"
  symbol = "-"
  rpcUrl = "-"
  blockExplorerUrl = "-"
  patoTokenAddress = "-"
  stakingAddress = "-"
  faucetAddress = "-"
  nftAddress = "-"


  constructor(name, id, symbol, rpcUrl, blockExplorerUrl, patoTokenAddress, stakingAddress, faucetAddress, nftMinterAddress){
    this.name = name
    this.id = id
    this.symbol = symbol
    this.rpcUrl = rpcUrl
    this.blockExplorerUrl = blockExplorerUrl
    this.patoTokenAddress = patoTokenAddress
    this.stakingAddress = stakingAddress
    this.faucetAddress = faucetAddress
    this.nftMinterAddress = nftMinterAddress
  } 
}

export default Chain;
