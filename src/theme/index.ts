import type { Direction, Theme } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import base from './palette/base';
import dark from './palette/dark';
import light from './palette/light';
import typography from './typography';
import merge from 'lodash/merge';
import { viVN } from '@mui/material/locale';

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface VShip {
  search: {
    main: string;
  };

  link: {
    main: string;
  };

  product: {
    main: string;
    hover: string;
    important: string;
    important2: string;
    bg: string;
    shadow: string;
    shadowHover: string;
  };

  text: {
    important: string;
    important2: string;
    disabled: string;
    disabled2: string;
    gray: string;
    orange: string;
    lightBlue: string;
    darkOrange: string;
  };

  border: {
    main: string;
    lightGray: string;
    lightBlue: string;
    darkOrange: string;
  };

  searchCatagorySelect: {
    border: string;
    color: string;
    background: string;
  };

  background: {
    lightBlue: string;
    gray: string;
    white: string;
    darkOrange: string;
    lightOrange: string;
  };

  tos: {
    menuBackground: string;
  };
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Neutral;
    vShip: VShip;
  }

  interface TypographyVariants {
    productCardPrice: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    productCardPrice?: React.CSSProperties;
  }

  interface PaletteOptions {
    neutral: Neutral;
    vShip: VShip;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    productCardPrice: true;
  }
}

interface ThemeConfig {
  direction?: Direction;
  mode: 'light' | 'dark';
}

const createAppTheme = (config: ThemeConfig): Theme => {
  const { mode, direction } = config;
  const palette = mode === 'light' ? light : dark;

  const theme = createTheme(
    merge({}, base, palette, typography, { direction }, viVN)
  );

  return responsiveFontSizes(theme);
};

export default createAppTheme;
