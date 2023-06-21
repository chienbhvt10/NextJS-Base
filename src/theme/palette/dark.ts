import type { ThemeOptions } from '@mui/material';
import type { VShip } from 'theme';

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

const vShip: VShip = {
  search: {
    main: '#079EC2',
  },
  link: {
    main: '#3277F0',
  },
  product: {
    main: '#1b5f83',
    hover: '#ed8b00',
    important: '#FF3945',
    important2: '#FF393999',
    bg: '#f5f5f5',
    shadow: '0px 1px 3px rgb(3 0 71 / 9%)',
    shadowHover: '0px 8px 45px rgb(3 0 71 / 9%)',
  },
  text: {
    important: '#FF3945',
    important2: '#FF393999',
    disabled: '#999',
    disabled2: '#ccc',
    gray: '#7a7a7a',
    orange: '#FF6800',
    lightBlue: '#089CD0',
    darkOrange: '#ee4d2d',
  },
  border: {
    main: '#E6E8F0',
    lightGray: '#bdbdbd',
    lightBlue: '#0088FF',
    darkOrange: '#ee4d2d',
  },
  searchCatagorySelect: {
    border: '1px solid #dadde9',
    color: 'rgba(0, 0, 0, 0.87)',
    background: 'rgba(217, 217, 217, 0.50)',
  },
  background: {
    lightBlue: '#D8E0F5',
    gray: '#f9f9f9',
    white: '#FFF',
    darkOrange: '#ee4d2d',
    lightOrange: '#fff3f3',
  },
  tos: {
    menuBackground:
      'linear-gradient(180deg, rgba(9, 99, 110, 0.57) 0%, rgba(7, 115, 194, 0.57) 100%)',
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
    vShip,
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
