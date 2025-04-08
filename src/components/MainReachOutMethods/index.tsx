import { styled } from '@mui/material';
import ConnectInvitationBlock from './ConnectInvitationBlock';
import ContactForm from './ContactForm';
import { responsive } from '../../utils/styleUtils';
import { classNames as contactFormClassNames } from './ContactForm/styles';
import { classNames as connectInvitationBlockClassNames } from './ConnectInvitationBlock/styles';

interface MainReachOutMethodsProps {
  styleVariant?: 'default' | 'filled';
}

export const classNames = {
  root: 'MainReachOutMethods',
};

const StyledMainReachOutMethods = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginTop: 32,

  ...responsive({
    desktop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    largeDesktop: {
      margin: '0 auto',
      maxWidth: 1300,
    },
  }),

  '>div': {
    ...responsive({
      desktop: {
        flexBasis: 'calc(50% - 12px)',
        flexShrink: 0,
      },
    }),
  },

  [`.${connectInvitationBlockClassNames.root}`]: {
    maxWidth: 625,
  },

  [`.${contactFormClassNames.root}`]: {
    flexGrow: 1,
  },
}));

const MainReachOutMethods = (props: MainReachOutMethodsProps) => {
  const { styleVariant = 'default' } = props;

  return (
    <StyledMainReachOutMethods className={classNames.root}>
      <ConnectInvitationBlock />
      <ContactForm styleVariant={styleVariant} />
    </StyledMainReachOutMethods>
  );
};

export default MainReachOutMethods;
