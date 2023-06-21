import RootContext, { RootContextValues } from '@/contexts/RootContext';
import { useContext } from 'react';

const useRootContext = (): RootContextValues => {
  const rootContext = useContext(RootContext);

  if (!rootContext) {
    throw new Error('Forgot to wrap component in rootContext');
  }

  return rootContext;
};

export default useRootContext;
