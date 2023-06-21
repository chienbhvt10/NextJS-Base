import SettingsContext from '@/contexts/SettingsContext';
import { useContext } from 'react';

const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('Forgot to wrap component in ThemeProvider');
  }

  const { settings, updateSettings } = context;

  return [settings, updateSettings] as const;
};

export default useSettings;
