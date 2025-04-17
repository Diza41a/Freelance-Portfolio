import { alpha, darken, styled } from '@mui/material';
import { responsive, scaleFontSize } from '../../utils/styleUtils';
import { classNames as themeToggleClassNames } from '../ThemeToggle';

export const classNames = {
  logoLink: 'LogoLink',
  navMenuExpanded: 'NavMenu--expanded',
  opaqueBackground: 'Header--opaqueBackground',
  hidden: 'Header--hidden',
  navMenuContainer: 'NavMenuContainer',
};

export const HEADER_HEIGHT = 64;
export const HEADER_HEIGHT_DESKTOP = 80;
const logoLinkFontSize = 26;
const navLinkFontSize = 16;
const Header = styled('header')(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndexes.header,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 5%',
  backgroundColor:
    theme.name === 'default'
      ? theme.colors.surface.secondary[300]
      : theme.colors.surface.primary[100],
  height: HEADER_HEIGHT,
  ...(theme.name === 'default'
    ? {
        boxShadow: 'rgb(25, 25, 25) 0px 0px 13px 0px',
      }
    : {
        outline: `1px solid ${alpha(theme.colors.border.primary, 0.4)}`,
      }),
  transition: 'background-color 0.2s ease-in-out, top 0.2s ease-in-out',

  [`.${classNames.logoLink}`]: {
    fontFamily: 'monospace',
    fontSize: scaleFontSize(logoLinkFontSize, 'mobile'),
    textDecoration: 'none',
    color: theme.colors.text.secondary[100],
    transition: 'color 0.2s ease-in-out',

    span: {
      '&:nth-of-type(2n - 1)': {
        color: darken(theme.colors.decorative.secondary, 0.2),
      },

      '&:nth-of-type(2n)': {
        color: theme.colors.decorative.primary,
      },
    },
  },

  [`.${classNames.navMenuContainer}`]: {
    display: 'flex',
    ...responsive({
      default: {
        columnGap: 8,
      },
      desktop: {
        columnGap: 20,
      },
    }),

    [`.${themeToggleClassNames.root}`]: {
      svg: {
        width: 28,
        height: 28,
        strokeWidth: 1.5,
        color: theme.colors.text.secondary[100],
        transition: 'color 0.2s ease-in-out',
      },
    },
  },

  nav: {
    position: 'relative',

    [`&:not(.${classNames.navMenuExpanded})`]: {
      ul: {
        left: '-100%',
        opacity: 0,

        li: {
          left: '100%',
        },
      },
    },

    ul: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      position: 'fixed',
      top: HEADER_HEIGHT,
      left: 0,
      overflow: 'hidden',
      backgroundColor: 'transparent',
      opacity: 1,
      transition: 'opacity 0.55s ease-in-out',

      li: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 35,
        position: 'relative',
        left: 0,
        backgroundColor:
          theme.name === 'default'
            ? theme.colors.surface.secondary[300]
            : theme.colors.surface.primary[100],
        transition: 'left 0.3s ease-in-out, background-color 0.2s ease-in-out',
        fontSize: 20,
        fontFamily: theme.fonts.secondary,

        a: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          borderTop: `1px inset ${theme.colors.text.secondary[200]}`,
          textDecoration: 'none',
          color: theme.colors.text.secondary[100],
          transition: 'color 0.2s ease-in-out',
        },

        '&:hover': {
          backgroundColor: theme.colors.decorative.secondary,

          a: {
            color: theme.colors.surface.secondary[200],
          },
        },

        '&:last-of-type': {
          borderBottom: `1px inset ${theme.colors.text.secondary[200]}`,
        },

        ...(() => {
          const navLinksAmount = 5;
          const transitionDelays = {};

          for (let i = 1; i <= navLinksAmount; i += 1) {
            const cssSelector = `&:nth-of-type(${i + 1})`;
            // @ts-ignore
            transitionDelays[cssSelector] = {
              transitionDelay: `${0.05 * i}s`,
            };
          }

          return transitionDelays;
        })(),
      },
    },

    '.hamburger-react': {
      color: theme.colors.text.secondary[100],
    },
  },

  [`&.${classNames.opaqueBackground}`]: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    outline: 'none',

    [`.${classNames.logoLink}`]: {
      color: theme.colors.text.primary[300],
    },

    [`.${classNames.navMenuContainer}`]: {
      svg: {
        color: theme.colors.text.primary[100],
      },
    },

    '.hamburger-react': {
      color: theme.colors.text.primary[300],
    },
  },

  [`&.${classNames.hidden}`]: {
    top: `-${HEADER_HEIGHT}px`,
    boxShadow: 'none',
  },

  [theme.breakpoints.up('desktop')]: {
    height: HEADER_HEIGHT_DESKTOP,
    padding: '0 10%',

    [`.${classNames.logoLink}`]: {
      fontSize: logoLinkFontSize,
    },

    nav: {
      ul: {
        opacity: '1 !important',
        position: 'static',
        flexDirection: 'row',
        columnGap: 10,

        li: {
          position: 'static',
          fontSize: navLinkFontSize,
          backgroundColor: theme.colors.surface.secondary[200],
          borderRadius: 23,
          transitionDelay: '0s !important',

          a: {
            padding: '12px 20px',
            border: 'none',
          },

          '&:hover': {
            outline: `1px solid ${theme.colors.decorative.secondary}`,
            outlineOffset: -1,
            backgroundColor: theme.colors.surface.secondary[200],

            a: {
              color: theme.colors.decorative.secondary,
            },
          },

          '&:last-of-type': {
            border: 'none',
          },
        },
      },

      '.hamburger-react': {
        display: 'none',
      },
    },

    [`&.${classNames.opaqueBackground}`]: {
      nav: {
        ul: {
          li: {
            backgroundColor: theme.colors.surface.primary[200],

            a: {
              color: theme.colors.text.primary[400],
            },

            '&:hover': {
              outlineColor: theme.colors.decorative.primary,

              a: {
                color: theme.colors.decorative.primary,
              },
            },
          },
        },
      },
    },

    [`&.${classNames.hidden}`]: {
      top: `-${HEADER_HEIGHT_DESKTOP}px`,
    },
  },

  [theme.breakpoints.up('largeDesktop')]: {
    padding: '0 15%',
  },
}));

export default { Header };
