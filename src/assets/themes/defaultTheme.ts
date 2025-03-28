import { createTheme } from '@mui/material';
import { BREAKPOINTS, COLORS } from './constants';
import { FONTS_DATA } from '../../utils/fontInjector';

const defaultTheme = createTheme({
  breakpoints: BREAKPOINTS,
  fonts: {
    main: FONTS_DATA.SpaceGrotesk.key,
    secondary: FONTS_DATA.WorkSans.key,
    headingAlternative: FONTS_DATA.VT323.key,
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
});

export default defaultTheme;
