import { styled } from '@mui/material';
import { scaleFontSize } from '../../../utils/styleUtils';
import { Z_INDEXES } from '../../../assets/themes/constants';

export const classNames = {
  root: 'Landing-HeroSection',
  titleContainer: 'Landing-HeroSection-TitleContainer',
  bodyContainer: 'Landing-HeroSection-BodyContainer',
  bodyContainerContent: 'Landing-HeroSection-BodyContainer-Content',
  bodyContainerText: 'Landing-HeroSection-BodyContainer-Text',
  bodyContainerActionButtons: 'Landing-HeroSection-BodyContainer-ActionButtons',
  bodyContainerLinks: 'Landing-HeroSection-BodyContainer-Links',
  bodyContainerImageContainer: 'Landing-HeroSection-BodyContainer-ImageContainer',
};

const HeroSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',

  [`.${classNames.titleContainer}`]: {
    position: 'relative',
    padding: '30px 5% 0 5%',
    height: '100%',
  },

  [`.${classNames.bodyContainer}`]: {
    padding: '0 5%',
    marginTop: 25,
    zIndex: 5,

    [`.${classNames.bodyContainerContent}`]: {
      display: 'flex',
      flexDirection: 'column',

      [`.${classNames.bodyContainerText}`]: {
        fontSize: scaleFontSize(20, 'mobile'),
        color: theme.colors.text.primary[400],
        marginBottom: 25,
      },

      [`.${classNames.bodyContainerActionButtons}`]: {
        display: 'flex',
        columnGap: 16,

        button: {
          minWidth: 150,
          fontSize: 13,
        },
      },

      [`.${classNames.bodyContainerLinks}`]: {
        display: 'flex',
        columnGap: 20,
        marginTop: 40,
      },
    },

    [`.${classNames.bodyContainerImageContainer}`]: {
      display: 'none',
    },
  },

  [theme.breakpoints.up('tablet')]: {
    [`.${classNames.titleContainer}`]: {
      padding: '60px 5% 0 5%',
      margin: '0 auto',

      h1: {
        maxWidth: 743,
      },
    },

    [`.${classNames.bodyContainer}`]: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',

      [`.${classNames.bodyContainerContent}`]: {
        order: 1,

        [`.${classNames.bodyContainerActionButtons}`]: {
          button: {
            fontSize: 14,
          },
        },

        [`.${classNames.bodyContainerLinks}`]: {
          marginTop: 60,
        },
      },

      [`.${classNames.bodyContainerImageContainer}`]: {
        marginTop: 18,
        order: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,

        '>img': {
          width: 550,
          zIndex: 2,
        },

        '>div': {
          position: 'absolute',
          zIndex: Z_INDEXES.backgroundImages,

          img: {
            position: 'relative',
            top: -24,
            left: -40,
            width: 419,
            height: 265,
            objectFit: 'cover',
            ...(theme.name === 'night' && { filter: 'grayscale(0.15)' }),
          },
        },
      },
    },
  },

  [theme.breakpoints.up('desktop')]: {
    [`.${classNames.titleContainer}`]: {
      h1: {
        maxWidth: 1050,
      },
    },

    [`.${classNames.bodyContainer}`]: {
      marginTop: 60,
      flexDirection: 'row',
      columnGap: 40,
      padding: '0 2.5%',
      justifyContent: 'center',

      [`.${classNames.bodyContainerContent}`]: {
        [`.${classNames.bodyContainerText}`]: {
          maxWidth: 500,
          marginBottom: 40,
        },

        [`.${classNames.bodyContainerActionButtons}`]: {
          button: {
            width: 250,
          },
        },

        [`.${classNames.bodyContainerLinks}`]: {
          marginTop: 80,
          columnGap: 40,
        },
      },

      [`.${classNames.bodyContainerImageContainer}`]: {
        order: 'unset',

        '>img': {
          width: 390,
          marginTop: 'auto',
        },

        '>div': {
          img: {
            top: -3,
            left: -26,
            width: 300,
            height: 200,
          },
        },
      },
    },
  },

  '@media (min-width: 1350px)': {
    [`.${classNames.bodyContainer}`]: {
      columnGap: 60,
      [`.${classNames.bodyContainerImageContainer}`]: {
        '>img': {
          width: 550,
        },

        '>div': {
          img: {
            top: -24,
            left: -40,
            width: 419,
            height: 265,
          },
        },
      },
    },
  },

  [theme.breakpoints.up('largeDesktop')]: {
    [`.${classNames.titleContainer}`]: {
      padding: '80px 10% 0 10%',
    },

    [`.${classNames.bodyContainer}`]: {
      padding: '0 10%',

      [`.${classNames.bodyContainerContent}`]: {
        [`.${classNames.bodyContainerActionButtons}`]: {
          button: {
            width: 275,
          },
        },
      },
    },
  },

  '@media (min-width: 1600px)': {
    [`.${classNames.bodyContainer}`]: {
      justifyContent: 'center',
      gap: 100,

      [`.${classNames.bodyContainerImageContainer}`]: {
        '>img': {
          width: 700,
        },

        '>div': {
          img: {
            top: -33,
            left: -50,
            width: 525,
            height: 327,
          },
        },
      },
    },
  },
}));

export default {
  HeroSection,
};
