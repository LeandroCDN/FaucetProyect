import { useFaucetContract } from 'hooks/useContract';
import useConfirmTx from './useConfirmTx';

export interface RequestTokensProps {
  account: string;
  onSuccess: () => void;
  onError: () => void;
}

// Approve a Farm or a Pool
export const useRequestTokens = ({ account, onSuccess, onError }: RequestTokensProps) => {
  const faucetContract = useFaucetContract();

  const { handleConfirm } = useConfirmTx({
    onConfirm: () => {
      return faucetContract.methods.requestTokens().send({ from: account });
    },
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      onError();
    }
  });

  return { onRequestTokens: handleConfirm };
};

export default useRequestTokens;
