import { NetworkConfig, NetworkNames } from './types';

const BSCConfig: NetworkConfig = {
  id: 56,
  displayName: 'Binance Smart Chain',
  name: NetworkNames.Bsc
};

const BSCTestnetConfig: NetworkConfig = {
  id: 97,
  displayName: 'Binance Smart Chain - Testnet',
  name: NetworkNames.BSCTest
};

const EthConfig: NetworkConfig = {
  id: 1,
  displayName: 'Ethereum',
  name: NetworkNames.ETH
};

const PolygonConfig: NetworkConfig = {
  id: 137,
  displayName: 'Polygon',
  name: NetworkNames.Polygon
};

const MumbaiConfig: NetworkConfig = {
  id: 80001,
  displayName: 'Mumbai',
  name: NetworkNames.Mumbai
};

const getNetworks = () => {
  const networkConfigs: NetworkConfig[] = [];
  if (process.env.REACT_APP_BSC_FAUCET_ADDRESS !== '' && process.env.REACT_APP_BSC_TOKEN_ADDRESS !== '') {
    networkConfigs.push(BSCConfig);
  }
  if (process.env.REACT_APP_BSC_TEST_FAUCET_ADDRESS !== '' && process.env.REACT_APP_BSC_TEST_TOKEN_ADDRESS !== '') {
    networkConfigs.push(BSCTestnetConfig);
  }
  if (process.env.REACT_APP_ETH_FAUCET_ADDRESS !== '' && process.env.REACT_APP_ETH_TOKEN_ADDRESS !== '') {
    networkConfigs.push(EthConfig);
  }
  if (process.env.REACT_APP_POLYGON_FAUCET_ADDRESS !== '' && process.env.REACT_APP_POLYGON_TOKEN_ADDRESS !== '') {
    networkConfigs.push(PolygonConfig);
  }
  if (process.env.REACT_APP_MUMBAI_FAUCET_ADDRESS !== '' && process.env.REACT_APP_MUMBAI_TOKEN_ADDRESS !== '') {
    networkConfigs.push(MumbaiConfig);
  }
  return networkConfigs;
};

export const networks = getNetworks();
export const networkLocalStorageKey = 'openfaucet_networkId';
