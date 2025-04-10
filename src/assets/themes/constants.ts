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
  cyan: '#55E5E4',
  lightBlues: {
    100: '#F4FEFF',
    200: '#E2FAFC',
    300: '#C0F2F7',
    400: '#91E8F0',
    500: '#55E5E4',
  },
  blacks: {
    100: '#0d0d0d',
    200: '#1d1d1d',
    300: '#282828',
    400: '#373636',
    500: '#939393',
  },
  lightBlacks: {
    100: '#1A1A1A',
    200: '#222222',
    300: '#2C2C2C',
    400: '#393939',
    500: '#4A4A4A',
  },
  purple: '#6805F1',
  crimson: '#E5485D',
  whites: {
    100: '#FFFFFF',
    200: '#F0EFEF',
    300: '#D9D9D9',
    400: ' #B3B3B3',
    500: '#999999',
  },
  lightWhites: {
    100: '#FFFFFF',
    200: '#F9F9F9',
    300: '#EFEFEF',
    400: '#E0E0E0',
    500: '#D4D4D4',
  },
};

export const Z_INDEXES = {
  default: 2,
  header: 1000,
  backgroundImages: 1,
};

export const KEYFRAMES_NAMES = {
  nightThemeHeadingGlow: 'nightThemeHeadingGlow',
};
export const KEYFRAMES = {
  [`@keyframes ${KEYFRAMES_NAMES.nightThemeHeadingGlow}`]: {
    '0%': {
      textShadow: `0 0 2px ${COLORS.lightBlues[500]}, 0 0 4px ${COLORS.lightBlues[500]}`,
    },
    '50%': {
      textShadow: `0 0 4px ${COLORS.lightBlues[500]}, 0 0 6px ${COLORS.lightBlues[500]}`,
    },
    '100%': {
      textShadow: `0 0 2px ${COLORS.lightBlues[500]}, 0 0 4px ${COLORS.lightBlues[500]}`,
    },
  },
};
