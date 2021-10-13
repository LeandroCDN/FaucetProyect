import { NetworkId } from 'views/Faucet2/config';
import Web3 from 'web3';
import { HttpProviderOptions } from 'web3-core-helpers';
import { getBscRpcUrl, getBscTestRpcUrl, getEthereumRpcUrl, getMumbaiRpcUrl, getPolygonRpcUrl } from './getRpcUrl';

const getRpcProvider = (chainId: NetworkId = NetworkId.BscTestnet) => {
  switch (chainId) {
    case NetworkId.Bsc:
      return new Web3.providers.HttpProvider(getBscRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case NetworkId.Polygon:
      return new Web3.providers.HttpProvider(getPolygonRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case NetworkId.Mumbai:
      return new Web3.providers.HttpProvider(getMumbaiRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case NetworkId.Eth:
      return new Web3.providers.HttpProvider(getEthereumRpcUrl(), { timeout: 10000 } as HttpProviderOptions);

    case NetworkId.BscTestnet:
    default:
      return new Web3.providers.HttpProvider(getBscTestRpcUrl(), { timeout: 10000 } as HttpProviderOptions);
  }
};
export default getRpcProvider;
