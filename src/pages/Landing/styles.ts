import { styled } from '@mui/material';
import { scaleFontSize } from '../../utils/styleUtils';

export const classNames = {
  titleContainer: 'Landing-TitleContainer',
  bodyContainer: 'Landing-BodyContainer',
  bodyContainerText: 'Landing-BodyContainer-Text',
  bodyContainerActionButtons: 'Landing-BodyContainer-ActionButtons',
  bodyContainerLinks: 'Landing-BodyContainer-Links',
};

const LandingPage = styled('div')(({ theme }) => ({
  minHeight: '200vh',
  overflowX: 'hidden',
  position: 'relative',

  [`.${classNames.titleContainer}`]: {
    position: 'relative',
    padding: '10px 5% 0 5%',
    height: '100%',
  },

  [`.${classNames.bodyContainer}`]: {
    padding: '0 5%',
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',

    [`.${classNames.bodyContainerText}`]: {
      fontSize: scaleFontSize(20, 'mobile'),
      color: theme.pages.landing.colors.welcomeText,
      marginBottom: 25,
    },

    [`.${classNames.bodyContainerActionButtons}`]: {
      display: 'flex',
      columnGap: 16,

      button: {
        width: 200,
        fontSize: 13,
      },
    },
  },

  [`.${classNames.bodyContainerLinks}`]: {
    display: 'flex',
    columnGap: 20,
    marginTop: 40,
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

      [`.${classNames.bodyContainerActionButtons}`]: {
        button: {
          fontSize: 14,
        },
      },

      [`.${classNames.bodyContainerLinks}`]: {
        marginTop: 60,
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

      [`.${classNames.bodyContainerText}`]: {
        maxWidth: 500,
        marginBottom: 40,
      },

      [`.${classNames.bodyContainerActionButtons}`]: {
        button: {
          width: 345,
        },
      },

      [`.${classNames.bodyContainerLinks}`]: {
        marginTop: 80,
        columnGap: 40,
        maxWidth: 706,
      },
    },
  },

  [theme.breakpoints.up('largeDesktop')]: {
    [`.${classNames.titleContainer}`]: {
      padding: '80px 10% 0 10%',
    },

    [`.${classNames.bodyContainer}`]: {
      padding: '0 10%',
    },
  },
}));

export default {
  LandingPage,
};
