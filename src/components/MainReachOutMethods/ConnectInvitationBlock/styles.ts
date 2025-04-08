import { styled } from '@mui/material';
import { responsive } from '../../../utils/styleUtils';

export const classNames = {
  root: 'ConnectInvitationBlock',
  linksContainer: 'LinksContainer',
};

const ConnectInvitationBlock = styled('div')(() => ({
  h3: {
    ...responsive({
      default: {
        marginBottom: 8,
      },
      desktop: {
        marginBottom: 16,
      },
    }),
  },
}));

export default {
  ConnectInvitationBlock,
};
