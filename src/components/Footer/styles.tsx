import { styled } from '@mui/material';
import { responsive } from '../../utils/styleUtils';

export const classNames = {
  root: 'Footer',
  mainSectionsContainer: 'Footer-MainSectionsContainer',
  navLinkActive: '--active',
  socialMedia: 'Footer-SocialMedia',
  sectionTitle: 'Footer-SectionTitle',
  buttonBackToTopContainer: 'Footer-ButtonBackToTopContainer',
};

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.colors.surface.secondary[200],
  padding: '0 5% ',
  position: 'relative',
  overflow: 'hidden',

  [`.${classNames.mainSectionsContainer}`]: {
    display: 'flex',
    position: 'relative',
    zIndex: theme.zIndexes.default,

    ...responsive({
      default: {
        rowGap: 24,
        columnGap: 50,
        padding: '24px 0',
      },
      tablet: {
        columnGap: 200,
      },
      desktop: {
        padding: '120px 0',
      },
    }),

    '*': {
      color: theme.colors.text.secondary[100],
    },

    [`.${classNames.sectionTitle}`]: {
      ...responsive({
        default: {
          marginBottom: 16,
        },
        desktop: {
          marginBottom: 24,
        },
      }),
    },

    ul: {
      padding: 0,
      margin: 0,

      li: {
        listStyle: 'none',
        ...responsive({
          default: {
            marginBottom: 8,
          },
          desktop: {
            marginBottom: 16,
          },
        }),

        a: {
          textDecoration: 'none',
          ...responsive({
            default: {
              fontSize: 14,
            },
            desktop: {
              fontSize: 16,
            },
          }),

          transition: 'color 0.2s ease-in-out',
          [`&:hover, &.${classNames.navLinkActive}`]: {
            color: theme.colors.decorative.secondary,
          },
        },
      },
    },

    [`.${classNames.socialMedia}`]: {
      a: {
        color: theme.colors.text.secondary[100],
        borderColor: theme.colors.text.secondary[100],
        fontFamily: theme.fonts.main,
        textTransform: 'none',
        borderRadius: 23,
        ...responsive({
          default: {
            padding: '8px 16px',
            fontSize: 14,
          },
          desktop: {
            padding: '8px 24px',
            fontSize: 16,
          },
        }),

        svg: {
          ...responsive({
            default: {
              width: 16,
              height: 16,
            },
            desktop: {
              width: 18,
              height: 18,
            },
          }),
        },
      },
    },
  },

  [`.${classNames.buttonBackToTopContainer}`]: {
    position: 'relative',
    zIndex: theme.zIndexes.default,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 24,

    button: {
      borderRadius: 23,
      textTransform: 'none',
      color: theme.colors.text.primary[500],
      borderColor: theme.colors.text.primary[500],
      ...responsive({
        default: {
          padding: '8px 16px',
          fontSize: 14,
        },
        desktop: {
          padding: '8px 24px',
          fontSize: 16,
        },
      }),

      '.MuiButton-icon': {
        ...responsive({
          default: {
            marginLeft: 2,
          },
          desktop: {
            marginLeft: 4,
          },
        }),

        svg: {
          strokeWidth: 1.5,
          color: theme.colors.text.primary[500],
          ...responsive({
            default: {
              width: 16,
              height: 16,
            },
            desktop: {
              width: 18,
              height: 18,
            },
          }),
        },
      },
    },
  },
}));

export default {
  Footer,
};
