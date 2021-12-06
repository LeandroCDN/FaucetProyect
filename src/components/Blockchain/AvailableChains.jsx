import Chain from "./Chain"
import {
    PatoTokenAddress,
    StakingAddress,
    FaucetAddress
} from './Contracts'

let chains = []

chains.push(
    new Chain(
        "Polygon Mainnet",
        137,
        "MATIC",
        "https://rpc-mainnet.maticvigil.com/",
        "https://explorer.matic.network/",
        PatoTokenAddress,
        StakingAddress,
        FaucetAddress
    )
)

export default chains;
