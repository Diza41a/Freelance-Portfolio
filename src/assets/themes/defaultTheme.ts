import { createTheme } from '@mui/material';
import { BREAKPOINTS, COLORS } from './constants';
import { FONTS_DATA } from '../../utils/fontInjector';

const defaultTheme = createTheme({
  breakpoints: BREAKPOINTS,
  fonts: {
    main: FONTS_DATA.SpaceGrotesk.key,
    secondary: FONTS_DATA.WorkSans.key,
  },
  button: {
    primary: {
      colors: {
        background: COLORS.lightGreen,
        text: COLORS.black,
      },
    },
    secondary: {
      colors: {
        background: COLORS.black,
        text: COLORS.white,
      },
    },
    link: {
      colors: {
        background: COLORS.purple,
        text: COLORS.white,
      },
    },
  },
});

export default defaultTheme;
