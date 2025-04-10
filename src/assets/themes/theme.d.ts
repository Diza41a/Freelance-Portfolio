import { Z_INDEXES } from './constants';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileLandscape: true;
    tablet: true;
    desktop: true;
    largeDesktop: true;
    extraLargeDesktop: true;
  }
}

type Colors = {
  text: {
    primary: Record<100 | 200 | 300 | 400 | 500, string>;
    secondary: Record<100 | 200 | 300 | 400 | 500, string>;
    error: string;
  };
  surface: {
    primary: Record<100 | 200 | 300 | 400 | 500, string>;
    secondary: Record<100 | 200 | 300 | 400 | 500, string>;
    attention: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  action: {
    primary: {
      background: string;
      text: string;
    };
    secondary: {
      background: string;
      text: string;
    };
    link: {
      background: string;
      text: string;
    };
    neutral: {
      background: string;
      text: string;
    };
  };
  decorative: {
    primary: string;
    secondary: string;
  };
};
type ThemeName = 'default' | 'night';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
  interface Theme {
    zIndexes: typeof Z_INDEXES;
    fonts: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    colors: Colors;
    name: ThemeName;
  }
  interface ThemeOptions {
    zIndexes: typeof Z_INDEXES;
    fonts: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    colors: Colors;
    name: ThemeName;
  }
}

export {};
