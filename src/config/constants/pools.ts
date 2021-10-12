import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 222,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.beta,
    contractAddress: {
      97: '',
      56: '0x6f660c58723922c6f866a058199ff4881019b4b5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 221,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nft,
    contractAddress: {
      97: '',
      56: '0x8d018823d13c56d62ffb795151a9e629c21e047b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '173727',
  },
  {
    sousId: 220,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.chess,
    contractAddress: {
      97: '',
      56: '0x4D1Ec426d0d7fb6bF344Dd372d0502EDD71c8d88',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0861',
  },
]

export default pools
