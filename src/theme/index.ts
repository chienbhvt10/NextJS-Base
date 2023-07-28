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

export interface CustomTheme {
  background: {
    sideBar: string;
    message1: string;
    message2: string;
  };
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Neutral;
    customTheme: CustomTheme;
  }

  interface TypographyVariants {
    productCardPrice: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    productCardPrice?: React.CSSProperties;
  }

  interface PaletteOptions {
    neutral: Neutral;
    customTheme: CustomTheme;
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
