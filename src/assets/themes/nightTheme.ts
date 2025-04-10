import { createTheme } from '@mui/material';
import { BREAKPOINTS, COLORS, KEYFRAMES_NAMES, Z_INDEXES } from './constants';
import { FONTS_DATA } from '../../utils/fontInjector';
import { scaleFontSize } from '../../utils/styleUtils';

const typography = {
  body2: {
    color: COLORS.lightWhites[400],
    fontFamily: FONTS_DATA.WorkSans.key,
    fontSize: scaleFontSize(18, 'mobile'),

    [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
      fontSize: 18,
    },
  },
  body3: {
    color: COLORS.lightWhites[400],
    fontFamily: FONTS_DATA.WorkSans.key,
    fontSize: scaleFontSize(16, 'mobile'),

    [`@media (min-width:${BREAKPOINTS.values.tablet}px)`]: {
      fontSize: 16,
    },
  },
};

const nightTheme = createTheme({
  name: 'night',
  breakpoints: BREAKPOINTS,
  zIndexes: Z_INDEXES,
  fonts: {
    main: FONTS_DATA.SpaceGrotesk.key,
    secondary: FONTS_DATA.WorkSans.key,
    tertiary: FONTS_DATA.VT323.key,
  },
  colors: {
    text: {
      primary: COLORS.lightBlues,
      secondary: COLORS.lightWhites,
      error: '#D32F2F',
    },
    surface: {
      primary: COLORS.blacks,
      secondary: COLORS.lightBlacks,
      attention: COLORS.crimson,
    },
    border: {
      primary: '#979797',
      secondary: COLORS.whites[200],
    },
    action: {
      primary: {
        background: COLORS.cyan,
        text: COLORS.blacks[100],
      },
      secondary: {
        background: COLORS.blacks[200],
        text: COLORS.whites[100],
      },
      link: {
        background: COLORS.crimson,
        text: COLORS.whites[100],
      },
      neutral: {
        background: COLORS.whites[200],
        text: COLORS.blacks[400],
      },
    },
    decorative: {
      primary: COLORS.crimson,
      secondary: COLORS.cyan,
    },
  },
  typography,
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: COLORS.whites[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(70, 0.6),
          fontWeight: 600,
          textTransform: 'uppercase',
          textShadow: `0 0 8px ${COLORS.lightBlues[400]}`,
          animation: `${KEYFRAMES_NAMES.nightThemeHeadingGlow} 2.5s ease-in-out infinite`,

          [`@media (min-width:${BREAKPOINTS.values.tablet}px)`]: {
            fontSize: scaleFontSize(70, 0.75),
          },

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 70,
          },
        },
        h2: {
          color: COLORS.whites[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(48, 0.75),
          fontWeight: 600,
          textShadow: `0 0 6px ${COLORS.lightBlues[300]}`,
          animation: `${KEYFRAMES_NAMES.nightThemeHeadingGlow} 2.5s ease-in-out infinite`,

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 48,
          },
        },
        h3: {
          color: COLORS.whites[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(36, 'mobile'),
          fontWeight: 600,
          textTransform: 'uppercase',
          textShadow: `0 0 5px ${COLORS.lightBlues[300]}`,

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 36,
          },
        },
        h4: {
          color: COLORS.whites[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(28, 'mobile'),
          fontWeight: 'bold',
          textShadow: `0 0 4px ${COLORS.lightBlues[200]}`,

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 28,
          },
        },
        h5: {
          color: COLORS.whites[100],
          fontFamily: FONTS_DATA.SpaceGrotesk.key,
          fontSize: scaleFontSize(20, 'mobile'),
          fontWeight: 500,
          textTransform: 'uppercase',
          textShadow: `0 0 3px ${COLORS.lightBlues[200]}`,

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 20,
          },
        },
        body1: {
          color: COLORS.lightWhites[300],
          fontFamily: FONTS_DATA.WorkSans.key,
          fontSize: scaleFontSize(20, 'mobile'),

          [`@media (min-width:${BREAKPOINTS.values.desktop}px)`]: {
            fontSize: 20,
          },
        },
        body2: {
          ...typography.body2,
          color: COLORS.lightWhites[400],
        },
      },
    },
  },
});

export default nightTheme;
