'use client';
import GlobalBaseline from '@/components/styled/GlobalBaseline';
import { RootProvider } from '@/contexts/RootContext';
import { SettingsProvider } from '@/contexts/SettingsContext';
import i18n from '@/i18n';
import AdminLayoutBounder from '@/layouts/admin';
import { CssBaseline } from '@mui/material';
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

const RootPage: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <>{children}</>;
};
export default RootPage;
