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
  colors: {
    text: {
      primary: COLORS.blacks,
      secondary: COLORS.whites,
    },
    surface: {
      primary: COLORS.whites,
      secondary: COLORS.blacks,
      attention: COLORS.purple,
    },
    border: {
      primary: '#979797',
      secondary: COLORS.whites[200],
    },
    action: {
      primary: {
        background: COLORS.lightGreen,
        text: COLORS.blacks[100],
      },
      secondary: {
        background: COLORS.blacks[100],
        text: COLORS.whites[100],
      },
      link: {
        background: COLORS.purple,
        text: COLORS.whites[100],
      },
      neutral: {
        background: COLORS.whites[200],
        text: COLORS.blacks[400],
      },
    },
    decorative: {
      primary: COLORS.purple,
      secondary: COLORS.lightGreen,
    },
  },
  typography: {
    body3: {
      color: COLORS.blacks[400],
      fontFamily: FONTS_DATA.WorkSans.key,
      fontSize: scaleFontSize(16, 'mobile'),

      [`@media (min-width:${BREAKPOINTS.values.tablet}px)`]: {
        fontSize: 16,
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
        h4: {
          color: COLORS.blacks[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(28, 'mobile'),
          fontWeight: 'bold',

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 28,
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
          color: COLORS.blacks[400],
          fontFamily: FONTS_DATA.WorkSans.key,
          fontSize: scaleFontSize(20, 'mobile'),

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 20,
          },
        },
        body2: {
          color: COLORS.blacks[400],
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
