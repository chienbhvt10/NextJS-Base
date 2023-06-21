import GlobalBaseline from '@/components/styled/GlobalBaseline';
import { RootProvider } from '@/contexts/RootContext';
import { CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Home: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <RootProvider>
      <CssBaseline />
      <GlobalBaseline />
      {children}
    </RootProvider>
  );
};
