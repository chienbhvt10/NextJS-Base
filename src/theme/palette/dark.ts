import type { ThemeOptions } from '@mui/material';
import { CustomTheme } from '..';

const neutral = {
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
};

const customTheme: CustomTheme = {
  background: {
    sideBar: '#58cdb3',
  },
};

const background = {
  default: '#0B0F19',
  paper: neutral[900],
};

const divider = '#2D3748';

const primary = {
  main: '#7582EB',
  light: '#909BEF',
  dark: '#515BA4',
  contrastText: neutral[900],
};

const secondary = {
  main: '#10B981',
  light: '#3FC79A',
  dark: '#0B815A',
  contrastText: neutral[900],
};

const success = {
  main: '#14B8A6',
  light: '#43C6B7',
  dark: '#0E8074',
  contrastText: neutral[900],
};

const info = {
  main: '#2196F3',
  light: '#64B6F7',
  dark: '#0B79D0',
  contrastText: neutral[900],
};

const warning = {
  main: '#FFB020',
  light: '#FFBF4C',
  dark: '#B27B16',
  contrastText: neutral[900],
};

const error = {
  main: '#D14343',
  light: '#DA6868',
  dark: '#922E2E',
  contrastText: neutral[900],
};

const text = {
  primary: '#EDF2F7',
  secondary: '#A0AEC0',
  disabled: 'rgba(255, 255, 255, 0.48)',
};

const dark: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: '#FFFFFF',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    action: {
      active: neutral[400],
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.26)',
    },
    background,
    divider,
    error,
    info,
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    customTheme,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
    '0px 1px 4px rgba(0, 0, 0, 0.24)',
    '0px 1px 5px rgba(0, 0, 0, 0.24)',
    '0px 1px 6px rgba(0, 0, 0, 0.24)',
    '0px 2px 6px rgba(0, 0, 0, 0.24)',
    '0px 3px 6px rgba(0, 0, 0, 0.24)',
    '0px 4px 6px rgba(0, 0, 0, 0.24)',
    '0px 5px 12px rgba(0, 0, 0, 0.24)',
    '0px 5px 14px rgba(0, 0, 0, 0.24)',
    '0px 5px 15px rgba(0, 0, 0, 0.24)',
    '0px 6px 15px rgba(0, 0, 0, 0.24)',
    '0px 7px 15px rgba(0, 0, 0, 0.24)',
    '0px 8px 15px rgba(0, 0, 0, 0.24)',
    '0px 9px 15px rgba(0, 0, 0, 0.24)',
    '0px 10px 15px rgba(0, 0, 0, 0.24)',
    '0px 12px 22px -8px rgba(0, 0, 0, 0.24)',
    '0px 13px 22px -8px rgba(0, 0, 0, 0.24)',
    '0px 14px 24px -8px rgba(0, 0, 0, 0.24)',
    '0px 20px 25px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
    '0px 25px 50px rgba(0, 0, 0, 0.24)',
  ],
};

export default dark;
