import { styled } from '@mui/material';
import { responsive } from '../../utils/styleUtils';

export const classNames = {
  root: 'Landing',
};

const LandingPage = styled('div')(() => ({
  ...responsive({
    default: {
      paddingBottom: 30,
    },
    desktop: {
      paddingBottom: 60,
    },
  }),
}));

export default {
  LandingPage,
};
