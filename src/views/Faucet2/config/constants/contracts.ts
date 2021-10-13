const contracts = {
  faucet: {
    1: process.env.REACT_APP_ETH_FAUCET_ADDRESS,
    56: process.env.REACT_APP_BSC_FAUCET_ADDRESS,
    97: process.env.REACT_APP_BSC_TEST_FAUCET_ADDRESS,
    137: process.env.REACT_APP_POLYGON_FAUCET_ADDRESS,
    80001: process.env.REACT_APP_MUMBAI_FAUCET_ADDRESS
  },
  token: {
    1: process.env.REACT_APP_ETH_TOKEN_ADDRESS,
    56: process.env.REACT_APP_BSC_TOKEN_ADDRESS,
    97: process.env.REACT_APP_BSC_TEST_TOKEN_ADDRESS,
    137: process.env.REACT_APP_POLYGON_TOKEN_ADDRESS,
    80001: process.env.REACT_APP_MUMBAI_TOKEN_ADDRESS
  },
};
export default contracts;
