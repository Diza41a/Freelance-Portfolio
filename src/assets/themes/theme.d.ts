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

declare module '@mui/material/styles' {
  interface Theme {
    // fonts: {
    //   main: string;
    //   secondary: string;
    //   tertiary: string;
    // };
  }
  interface ThemeOptions {
    // fonts: {
    //   main: string;
    //   secondary: string;
    //   tertiary?: string;
    // };
  }
}

export {};
