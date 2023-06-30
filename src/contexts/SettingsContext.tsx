'use client';
import createAppTheme from '@/theme';
import LocalStorage from '@/utils/local-storage';
import type { Direction } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface Settings {
  direction?: Direction;
  mode: 'light' | 'dark' | 'default';
  language: 'vi' | 'en';
}

export interface SettingsContextValue {
  settings: Settings;
  updateSettings: (update: Settings) => void;
}

const initialSettings: Settings = {
  direction: 'ltr',
  mode: 'light',
  language: 'vi',
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

if (process.env.NODE_ENV === 'development') {
  SettingsContext.displayName = 'SettingsContext';
}

const SettingsProvider: React.FunctionComponent<PropsWithChildren> = (
  props
) => {
  const { children } = props;
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const defaultMode = isDarkMode ? 'dark' : 'light';
  const { i18n } = useTranslation();

  useEffect(() => {
    const settings = LocalStorage.get('settings', initialSettings);
    if (Object.keys(settings).every((key) => key in initialSettings)) {
      setSettings(settings);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(settings.language);
  }, [settings.language, i18n]);

  const updateSettings = useCallback((updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    LocalStorage.set('settings', updatedSettings);
  }, []);

  const theme = useMemo(() => {
    const { mode } = settings;
    return createAppTheme({
      ...settings,
      mode: mode === 'default' ? defaultMode : mode,
    });
  }, [settings, defaultMode]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};

const SettingsConsumer = SettingsContext.Consumer;
export { SettingsConsumer, SettingsProvider, SettingsContext as default };
