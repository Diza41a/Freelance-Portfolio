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
type HeaderStyles = {
  colors: {
    background: string;
    text: string;
    navLinkBackground: string;
    navLinkTextPrimary: string;
    navLinkTextSecondary: string;
  };
};
declare module '@mui/material/styles' {
  interface Theme {
    fonts: {
      main: string;
      secondary: string;
      headingAlternative: string;
    };
    button: {
      primary: ButtonStyles;
      secondary: ButtonStyles;
      link: ButtonStyles;
    };
    header: {
      opaqueBackground: HeaderStyles;
      primary: HeaderStyles;
    };
  }
  interface ThemeOptions {
    fonts: {
      main: string;
      secondary: string;
      headingAlternative: string;
    };
    button: {
      primary: ButtonStyles;
      secondary: ButtonStyles;
      link: ButtonStyles;
    };
    header: {
      opaqueBackground: HeaderStyles;
      primary: HeaderStyles;
    };
  }
}

export {};
