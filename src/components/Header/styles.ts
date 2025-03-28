import { styled } from '@mui/material';
import { scaleFontSize } from '../../utils/styleUtils';

export const classNames = {
  logoLink: 'LogoLink',
  navMenuExpanded: 'NavMenu--expanded',
};

const height = 64;
const desktopHeight = 80;
const logoLinkFontSize = 35;
const navLinkFontSize = 16;
const Header = styled('header')(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 5%',
  backgroundColor: theme.header.primary.colors.background,
  height,
  boxShadow: 'rgb(25, 25, 25) 0px 0px 13px 0px',

  [`.${classNames.logoLink}`]: {
    fontFamily: theme.fonts.headingAlternative,
    fontSize: scaleFontSize(logoLinkFontSize, 'mobile'),
    textDecoration: 'none',
    color: theme.header.primary.colors.text,
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
      top: height,
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
        backgroundColor: theme.header.primary.colors.background,
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
          borderTop: `1px inset ${theme.header.primary.colors.navLinkTextPrimary}`,
          textDecoration: 'none',
          color: theme.header.primary.colors.text,
          transition: 'color 0.2s ease-in-out',
        },

        '&:hover': {
          backgroundColor: theme.header.primary.colors.navLinkTextSecondary,

          a: {
            color: theme.header.primary.colors.navLinkBackground,
          },
        },

        '&:last-of-type': {
          borderBottom: `1px inset ${theme.header.primary.colors.navLinkTextPrimary}`,
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
      color: theme.header.primary.colors.text,
    },
  },

  [theme.breakpoints.up('desktop')]: {
    height: desktopHeight,
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
          backgroundColor: theme.header.primary.colors.navLinkBackground,
          borderRadius: 23,

          a: {
            padding: '12px 20px',
            border: 'none',
          },

          '&:hover': {
            outline: `1px solid ${theme.header.primary.colors.navLinkTextSecondary}`,
            outlineOffset: -1,
            backgroundColor: theme.header.primary.colors.navLinkBackground,

            a: {
              color: theme.header.primary.colors.navLinkTextSecondary,
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
  },

  [theme.breakpoints.up('largeDesktop')]: {
    padding: '0 20%',
  },
}));

export default { Header };
