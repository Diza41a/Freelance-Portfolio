import { styled } from '@mui/material';
import { responsive } from '../../../utils/styleUtils';

export const classNames = {
  root: 'DevProcessSection',
  title: 'DevProcessSection-Title',
  cardsContainer: 'DevProcessSection-CardsContainer',
  cardContainer: 'DevProcessSection-CardContainer',
  card: 'DevProcessSection-Card',
  cardTextContainer: 'DevProcessSection-Card-TextContainer',
  cardNumber: 'DevProcessSection-Card-Number',
  cardTitle: 'DevProcessSection-Card-Title',
  cardDescription: 'DevProcessSection-Card-Description',
  cardImageContainer: 'DevProcessSection-Card-ImageContainer',
};

const DevProcessSection = styled('div')(({ theme }) => ({
  padding: '0 5%',
  ...responsive({
    default: {
      marginTop: 60,
    },
    desktop: {
      marginTop: 120,
    },
  }),

  [`.${classNames.cardsContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    ...responsive({
      default: {
        flexDirection: 'column',
        marginTop: 24,
        rowGap: 16,
        columnGap: 16,
      },
      tablet: {
        flexDirection: 'row',
      },
      desktop: {
        marginTop: 36,
        rowGap: 52,
        columnGap: 32,
      },
    }),

    [`.${classNames.cardContainer}`]: {
      width: 'min(100%, 360px)',
      [`.${classNames.card}`]: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.surface.primary[100],
        border: `1px solid ${theme.colors.border.primary}`,
        borderRadius: 8,
        ...responsive({
          tablet: {
            height: 350,
          },
          desktop: {
            height: 466,
          },
        }),

        [`.${classNames.cardTextContainer}`]: {
          ...responsive({
            default: {
              padding: '20px 15px 10px 15px',
            },
            tablet: {
              padding: '25px 25px 10px 25px',
            },
            desktop: {
              padding: '40px 35px 15px 35px',
            },
          }),

          [`.${classNames.cardNumber}`]: {
            fontFamily: theme.fonts.main,
            fontWeight: 'bold',
            backgroundColor:
              theme.name === 'default'
                ? theme.colors.decorative.secondary
                : theme.colors.decorative.primary,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...responsive({
              default: {
                width: 30,
                height: 30,
                marginBottom: 12,
              },
              desktop: {
                width: 40,
                height: 40,
                marginBottom: 16,
              },
            }),
          },

          [`.${classNames.cardTitle}`]: {
            textTransform: 'none',
            ...responsive({
              default: {
                marginBottom: 6,
              },
              desktop: {
                marginBottom: 8,
              },
            }),
          },
        },

        [`.${classNames.cardImageContainer}`]: {
          borderRadius: '0 0 8px 8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: `1px solid ${theme.colors.border.primary}`,
          ...responsive({
            default: {
              height: 150,
            },
            desktop: {
              height: 200,
            },
          }),

          img: {
            position: 'relative',
            outline: `1px solid ${theme.colors.border.secondary}`,
            outlineOffset: -4,
            ...responsive({
              default: {
                width: 160,
                height: 160,
              },
              desktop: {
                width: 175,
                height: 175,
              },
            }),
            objectFit: 'fill',
          },
        },
      },

      '&:nth-of-type(n)': {
        [`.${classNames.card}`]: {
          [`.${classNames.cardImageContainer}`]: {
            backgroundColor:
              theme.name === 'default'
                ? theme.colors.surface.secondary[100]
                : theme.colors.surface.secondary[200],
          },
        },
      },

      '&:nth-of-type(2n)': {
        [`.${classNames.card}`]: {
          [`.${classNames.cardImageContainer}`]: {
            backgroundColor:
              theme.name === 'default'
                ? theme.colors.decorative.primary
                : theme.colors.surface.secondary[400],
          },
        },
      },

      ...(() => {
        const styles = {};
        const cardsAmount = 4;
        for (let i = 0; i < cardsAmount; i += 1) {
          // @ts-ignore
          styles[`&:nth-of-type(${i + 1})`] = {
            [`.${classNames.card}`]: {
              zIndex: 2 + cardsAmount - i,
            },
          };
        }

        return styles;
      })(),
    },
  },

  [theme.breakpoints.up('desktop')]: {
    [`.${classNames.cardsContainer}`]: {
      padding: '0 2.5%',

      [`.${classNames.cardContainer}`]: {
        '&:nth-of-type(1)': {
          [`.${classNames.card}`]: {
            top: -10,
            rotate: '-1.5deg!important',

            [`.${classNames.cardImageContainer}`]: {
              img: {
                width: 222,
                height: 222,
                top: 32,
              },
            },
          },
        },

        '&:nth-of-type(2)': {
          [`.${classNames.card}`]: {
            top: 5,
            left: -10,

            [`.${classNames.cardImageContainer}`]: {
              img: {
                width: 183,
                height: 183,
                top: 28,
                rotate: '5deg',
              },
            },
          },
        },

        '&:nth-of-type(3)': {
          [`.${classNames.card}`]: {
            top: -10,
            left: -18,
            rotate: '-1deg!important',

            [`.${classNames.cardImageContainer}`]: {
              img: {
                width: 174,
                height: 174,
                top: 32,
                rotate: '-1deg',
              },
            },
          },
        },

        '&:nth-of-type(4)': {
          [`.${classNames.card}`]: {
            top: -17,
            left: -17,
            rotate: '-1deg!important',

            [`.${classNames.cardImageContainer}`]: {
              img: {
                width: 222,
                height: 222,
                top: 10,
                rotate: '-3deg',
              },
            },
          },
        },
      },
    },
  },

  [theme.breakpoints.up('largeDesktop')]: {
    padding: 0,

    h2: {
      padding: '0 5%',
    },
  },

  '@media (min-width: 1295px)': {
    padding: '0 5%',

    h2: {
      padding: 0,
    },

    [`.${classNames.cardsContainer}`]: {
      padding: 0,
    },
  },

  '@media (min-width: 1722px)': {
    [`.${classNames.cardsContainer}`]: {
      [`.${classNames.cardContainer}`]: {
        '&:nth-of-type(4)': {
          [`.${classNames.card}`]: {
            rotate: '3deg!important',

            [`.${classNames.cardImageContainer}`]: {
              img: {
                rotate: '5deg',
              },
            },
          },
        },
      },
    },
  },
}));

export default {
  DevProcessSection,
};
