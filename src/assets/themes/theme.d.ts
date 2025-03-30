import { Z_INDEXES } from './constants';

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

type ButtonStyles = {
  colors: {
    background: string;
    text: string;
  };
};
type LinkStyles = {
  colors: {
    text: string;
    icon: string;
  };
};
type RunningLineStyles = {
  colors: {
    background: string;
    text: string;
  };
};
type HeaderStyles = {
  colors: {
    background: string;
    text: string;
    navLinkBackground: string;
    navLinkTextPrimary: string;
    navLinkTextSecondary: string;
  };
};
type PageStyles = {
  landing: {
    colors: {
      welcomeText: string;
    };
  };
};
declare module '@mui/material/styles' {
  interface Theme {
    zIndexes: typeof Z_INDEXES;
    fonts: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    button: {
      primary: ButtonStyles;
      secondary: ButtonStyles;
      link: ButtonStyles;
      neutral: ButtonStyles;
    };
    link: {
      primary: LinkStyles;
    };
    runningLine: RunningLineStyles;
    header: {
      opaqueBackground: HeaderStyles;
      primary: HeaderStyles;
    };
    pages: PageStyles;
  }
  interface ThemeOptions {
    zIndexes: typeof Z_INDEXES;
    fonts: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    button: {
      primary: ButtonStyles;
      secondary: ButtonStyles;
      link: ButtonStyles;
      neutral: ButtonStyles;
    };
    link: {
      primary: LinkStyles;
    };
    runningLine: RunningLineStyles;
    header: {
      opaqueBackground: HeaderStyles;
      primary: HeaderStyles;
    };
    pages: PageStyles;
  }
}

export {};
