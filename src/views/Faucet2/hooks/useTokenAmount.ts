import { useEffect, useMemo } from 'react';
import { BigNumber } from 'ethers';
import { useFaucetContract } from 'hooks/useContract';
import useAsync from './useAsync';

export const useTokenAmount = () => {
  const faucetContract = useFaucetContract();
  const { options } = faucetContract;

  const {
    execute: callTokenAmount,
    loading,
    data,
    error
  } = useAsync<any, any>({
    asyncFunc: faucetContract.methods.tokenAmount().call,
    asyncFuncParams: {},
    immediate: false,
    initialData: '0'
  });

  const serializedData = useMemo(() => BigNumber.from(data).div(BigNumber.from(10).pow(18)), [data]).toString();

  useEffect(() => {
    if (options.address) {
      callTokenAmount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return { tokenAmount: serializedData, loading, error };
};

export default useTokenAmount;
