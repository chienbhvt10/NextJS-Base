'use client';
import GlobalBaseline from '@/components/styled/GlobalBaseline';
import { RootProvider } from '@/contexts/RootContext';
import { SettingsProvider } from '@/contexts/SettingsContext';
import i18n from '@/i18n';
import { CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

const Home: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <RootProvider>
      <SettingsProvider>
        <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <GlobalBaseline />
          {children}
        </I18nextProvider>
      </SettingsProvider>
    </RootProvider>
  );
};
export default Home;
