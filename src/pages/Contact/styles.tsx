import { styled } from '@mui/material';
import { responsive } from '../../utils/styleUtils';

export const classNames = { root: 'Contact' };

const ContactPage = styled('div')(() => ({
  overflow: 'hidden',
  ...responsive({
    default: {
      padding: '0 5% 24px 5%',
    },
    desktop: {
      padding: '0 10% 60px 10%',
    },
  }),
}));

export default {
  ContactPage,
};
