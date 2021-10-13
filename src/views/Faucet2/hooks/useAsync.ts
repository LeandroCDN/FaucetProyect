import { useCallback, useEffect, useRef, useState } from 'react';

export interface AsyncCallProps<SendParams, ReturnObj> {
  asyncFunc: (params: SendParams) => Promise<ReturnObj>;
  asyncFuncParams: SendParams;
  immediate: boolean;
  initialData: any;
}

function useAsync<T, S>(props: AsyncCallProps<T, S>) {
  const { asyncFunc, immediate, asyncFuncParams, initialData } = {
    ...props
  };
  const [loading, setLoading] = useState(immediate);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  const execute = useCallback(
    (params?) => {
      setLoading(true);
      return asyncFunc({ ...asyncFuncParams, ...params })
        .then((res) => {
          if (!mountedRef.current) return null;
          setData(res);
          setError(null);
          setLoading(false);
          return res;
        })
        .catch((err) => {
          if (!mountedRef.current) return null;
          setError(err);
          setLoading(false);
          throw err;
        });
    },
    [asyncFunc, asyncFuncParams]
  );

  useEffect(() => {
    if (immediate) {
      execute(asyncFuncParams);
    }
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    execute,
    loading,
    data,
    error
  };
}

export default useAsync;
