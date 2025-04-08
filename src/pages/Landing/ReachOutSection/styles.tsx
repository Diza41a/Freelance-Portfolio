import { styled } from '@mui/material';
import { responsive } from '../../../utils/styleUtils';

export const classNames = { root: 'Landing-ReachOutSection' };

const ReachOutSection = styled('div')(() => ({
  padding: '0 5%',
  ...responsive({
    default: {
      marginTop: 60,
    },
    desktop: {
      marginTop: 120,
    },
  }),
}));

export default {
  ReachOutSection,
};
