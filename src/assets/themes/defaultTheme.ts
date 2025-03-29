import { createTheme } from '@mui/material';
import { BREAKPOINTS, COLORS, Z_INDEXES } from './constants';
import { FONTS_DATA } from '../../utils/fontInjector';
import { scaleFontSize } from '../../utils/styleUtils';

const defaultTheme = createTheme({
  breakpoints: BREAKPOINTS,
  zIndexes: Z_INDEXES,
  fonts: {
    main: FONTS_DATA.SpaceGrotesk.key,
    secondary: FONTS_DATA.WorkSans.key,
    tertiary: FONTS_DATA.VT323.key,
  },
  button: {
    primary: {
      colors: {
        background: COLORS.lightGreen,
        text: COLORS.blacks[100],
      },
    },
    secondary: {
      colors: {
        background: COLORS.blacks[100],
        text: COLORS.whites[100],
      },
    },
    link: {
      colors: {
        background: COLORS.purple,
        text: COLORS.whites[100],
      },
    },
  },
  link: {
    primary: {
      colors: {
        text: COLORS.blacks[100],
        icon: COLORS.purple,
      },
    },
  },
  header: {
    opaqueBackground: {
      colors: {
        background: 'transparent',
        text: COLORS.blacks[300],
        navLinkBackground: COLORS.whites[200],
        navLinkTextPrimary: COLORS.blacks[400],
        navLinkTextSecondary: COLORS.purple,
      },
    },
    primary: {
      colors: {
        background: COLORS.blacks[300],
        text: COLORS.whites[100],
        navLinkBackground: COLORS.blacks[200],
        navLinkTextPrimary: COLORS.whites[200],
        navLinkTextSecondary: COLORS.lightGreen,
      },
    },
  },
  pages: {
    landing: {
      colors: {
        welcomeText: COLORS.blacks[400],
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(70, 0.6),
          fontWeight: 600,
          textTransform: 'uppercase',

          [`@media (min-width:${BREAKPOINTS.values.tablet}px)`]: {
            fontSize: scaleFontSize(70, 0.75),
          },

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 70,
          },
        },
        h2: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(48, 0.75),
          fontWeight: 600,

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 48,
          },
        },
        h3: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(36, 'mobile'),
          fontWeight: 600,
          textTransform: 'uppercase',

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 36,
          },
        },
        h5: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(20, 'mobile'),
          fontWeight: 500,
          textTransform: 'uppercase',

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 20,
          },
        },
        body1: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.WorkSans.key,
          fontSize: scaleFontSize(20, 'mobile'),

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 20,
          },
        },
        body2: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.WorkSans.key,
          fontSize: scaleFontSize(18, 'mobile'),

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 18,
          },
        },
      },
    },
  },
});

export default defaultTheme;
