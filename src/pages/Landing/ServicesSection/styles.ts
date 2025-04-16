import { styled } from '@mui/material';
import { scaleFontSize } from '../../../utils/styleUtils';

export const classNames = {
  root: 'Landing-ServicesSection',
  title: 'Landing-ServicesSection-Title',
  servicesContainer: 'Landing-ServicesSection-ServicesContainer',
  serviceCard: 'Landing-ServicesSection-ServiceCard',
  serviceCardIcon: 'Landing-ServicesSection-ServiceCard-Icon',
  serviceCardTextContainer: 'Landing-ServicesSection-ServiceCard-TextContainer',
};

const ServicesSection = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  marginTop: 60,
  padding: '0 5%',

  [`.${classNames.title}`]: {
    marginBottom: 18,
  },

  [`.${classNames.servicesContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 14,

    [`.${classNames.serviceCard}`]: {
      display: 'flex',
      columnGap: 20,
      padding: 20,
      width: 370,

      [`.${classNames.serviceCardIcon}`]: {
        flexShrink: 0,
        width: 55,
        height: 55,
        borderRadius: 8,
        backgroundColor: theme.colors.action.neutral.background,

        svg: {
          width: '100%',
          height: '100%',
          transform: 'scale(0.75)',
          strokeWidth: 1.5,
          color: theme.colors.action.neutral.text,
        },
      },

      [`.${classNames.serviceCardTextContainer}`]: {
        h5: {
          fontSize: scaleFontSize(30, 'mobile'),
          paddingBottom: 8,
          textTransform: 'none',
        },
      },
    },
  },

  [theme.breakpoints.up('desktop')]: {
    marginTop: 120,
    padding: '0 5%',

    [`.${classNames.title}`]: {
      marginBottom: 24,
    },

    [`.${classNames.servicesContainer}`]: {
      gap: 16,

      [`.${classNames.serviceCard}`]: {
        width: 400,
        padding: 40,

        [`.${classNames.serviceCardIcon}`]: {
          width: 70,
          height: 70,
        },
      },
    },
  },
}));

export default {
  ServicesSection,
};
