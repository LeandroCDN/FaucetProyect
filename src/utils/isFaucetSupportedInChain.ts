import { NetworkId } from 'views/Faucet2/config';

const isFaucetSupportedInChain = (chainId: NetworkId) => {
  switch (chainId) {
    case NetworkId.Eth:
      return process.env.REACT_APP_ETH_FAUCET_ADDRESS !== '' && process.env.REACT_APP_ETH_TOKEN_ADDRESS !== '';
    case NetworkId.Bsc:
      return process.env.REACT_APP_BSC_FAUCET_ADDRESS !== '' && process.env.REACT_APP_BSC_TOKEN_ADDRESS !== '';
    case NetworkId.BscTestnet:
      return (
        process.env.REACT_APP_BSC_TEST_FAUCET_ADDRESS !== '' && process.env.REACT_APP_BSC_TEST_TOKEN_ADDRESS !== ''
      );
    case NetworkId.Polygon:
      return process.env.REACT_APP_POLYGON_FAUCET_ADDRESS !== '' && process.env.REACT_APP_POLYGON_TOKEN_ADDRESS !== '';
    case NetworkId.Mumbai:
      return process.env.REACT_APP_MUMBAI_FAUCET_ADDRESS !== '' && process.env.REACT_APP_MUMBAI_TOKEN_ADDRESS !== '';
    default:
      return false;
  }
};
export default isFaucetSupportedInChain;
