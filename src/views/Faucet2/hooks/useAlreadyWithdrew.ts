import { useEffect } from 'react';
import { useFaucetContract } from 'hooks/useContract';
import useActiveWeb3React from './useActiveWeb3React';
import useAsync from './useAsync';


const useAlreadyWithdrawn = () => {
  const { account } = useActiveWeb3React();

  const faucetContract = useFaucetContract();
  const { options } = faucetContract;

  const {
    execute: fetchAllowedToWithdraw,
    loading,
    data,
    error
  } = useAsync<any, boolean>({
    asyncFunc: faucetContract.methods.alreadyWithdrew(account).call,
    asyncFuncParams: {},
    immediate: false,
    initialData: false
  });

  useEffect(() => {
    if (options.address && account) {
      fetchAllowedToWithdraw();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, account]);

  return { allowedToWithdraw: data || false, loading, error };
};

export default useAlreadyWithdrawn;
