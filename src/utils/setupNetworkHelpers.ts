import { NetworkId, NetworkNames, networks } from 'views/Faucet2/config';

export const findNetworkByChainId = (chainId: number) => networks.find((n) => n.id === chainId);

export const findNetworkByNetworkName = (name: NetworkNames) => networks.find((n) => n.name === name);

export const setupEthereumNetwork = async () => {
  const _provider = window.ethereum;
  if (_provider) {
    try {
      await _provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${NetworkId.Eth.toString(16)}` }]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the Ethereum network on metamask because window.ethereum is undefined");
    return false;
  }
};
export const setupBSCTestnetNetwork = async () => {
  const _provider = window.ethereum;
  if (_provider) {
    try {
      await _provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${NetworkId.BscTestnet.toString(16)}`,
            chainName: 'Ganache5',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18
            },
            blockExplorerUrls: [process.env.REACT_APP_BSC_TEST_SCANNER]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC Test network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupBSCNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${NetworkId.Bsc.toString(16)}`,
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18
            },
            blockExplorerUrls: [process.env.REACT_APP_BSC_SCANNER]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupPolygonNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${NetworkId.Polygon.toString(16)}`,
            chainName: 'Matic Mainnet',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18
            },
            blockExplorerUrls: [process.env.REACT_APP_POLYGON_SCANNER]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the Matic Mainnet network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupMumbaiNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${NetworkId.Mumbai.toString(16)}`,
            chainName: 'Mumbai Testnet',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18
            },
            blockExplorerUrls: [process.env.REACT_APP_MUMBAI_SCANNER]
          }
        ]
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the Mumbai Testnet network on metamask because window.ethereum is undefined");
    return false;
  }
};

export const setupNetworkById = async (chainId: NetworkId) => {
  switch (chainId) {
    case NetworkId.Eth:
      return setupEthereumNetwork();
    case NetworkId.Bsc:
      return setupBSCNetwork();
    default:
    case NetworkId.BscTestnet:
      return setupBSCTestnetNetwork();
    case NetworkId.Polygon:
      return setupPolygonNetwork();
    case NetworkId.Mumbai:
      return setupMumbaiNetwork();
  }
};
