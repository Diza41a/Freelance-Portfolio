export type BreakpointKeys =
  | 'mobileLandscape'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop'
  | 'extraLargeDesktop';

export type Breakpoints = {
  values: {
    [key in BreakpointKeys]: number;
  };
};

export const BREAKPOINTS: Breakpoints = {
  values: {
    mobileLandscape: 576,
    tablet: 768,
    desktop: 992,
    largeDesktop: 1200,
    extraLargeDesktop: 1401,
  },
};

export const COLORS = {
  lightGreen: '#93F203',
  blacks: {
    100: '#0d0d0d',
    200: '#1d1d1d',
    300: '#282828',
    400: '#373636',
    500: '#939393',
  },
  purple: '#6805F1',
  whites: {
    100: '#FFFFFF',
    200: '#F0EFEF',
    300: '#D9D9D9',
    400: ' #B3B3B3',
    500: '#999999',
  },
};

export const Z_INDEXES = {
  header: 1000,
  backgroundImages: -1,
};
