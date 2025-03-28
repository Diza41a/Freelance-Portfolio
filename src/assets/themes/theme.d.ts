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
declare module '@mui/material/styles' {
  interface Theme {
    fonts: {
      main: string;
      secondary: string;
      // tertiary: string;
    };
    button: {
      primary: ButtonStyles;
      secondary: ButtonStyles;
      link: ButtonStyles;
    };
  }
  interface ThemeOptions {
    fonts: {
      main: string;
      secondary: string;
    };
    button: {
      primary: ButtonStyles;
      secondary: ButtonStyles;
      link: ButtonStyles;
    };
  }
}

export {};
