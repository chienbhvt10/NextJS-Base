'use client';
import GlobalBaseline from '@/components/styled/GlobalBaseline';
import { RootProvider } from '@/contexts/RootContext';
import { SettingsProvider } from '@/contexts/SettingsContext';
import i18n from '@/i18n';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

const queryClient = new QueryClient();

const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    // Root layouts must contain html and body tags.
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <RootProvider>
            <SettingsProvider>
              <I18nextProvider i18n={i18n}>
                <CssBaseline />
                <GlobalBaseline />
                {children}{' '}
              </I18nextProvider>
            </SettingsProvider>
          </RootProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};
export default ClientLayout;
