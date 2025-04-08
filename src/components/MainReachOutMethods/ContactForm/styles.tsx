import { styled } from '@mui/material';
import { responsive } from '../../../utils/styleUtils';
import { classNames as textFieldClassNames } from '../../TextField';
import type { ContactFormProps } from './props';

export const classNames = {
  root: 'ContactForm',
  fieldContainer: 'FieldContainer',
  nameField: 'NameField',
  emailField: 'EmailField',
  phoneNumberField: 'PhoneNumberField',
  messageField: 'MessageField',
  submitButton: 'SubmitButton',
};

const ContactForm = styled('form')<ContactFormProps>(() => ({
  display: 'flex',
  ...responsive({
    default: {
      flexDirection: 'column',
      gap: 14,
    },
    desktop: {
      flexDirection: 'row',
      gap: 16,
      flexWrap: 'wrap',
    },
  }),

  [`.${classNames.fieldContainer}`]: {
    ...responsive({
      default: {
        width: '100%',
        maxWidth: 500,
      },
      largeDesktop: {
        maxWidth: 'unset',
      },
    }),

    [`.${textFieldClassNames.root}`]: {
      width: '100%',
    },
  },

  [`.${classNames.submitButton}`]: {
    ...responsive({
      default: {
        marginTop: 14,
        width: 250,
      },
      desktop: {
        marginTop: 16,
        width: 345,
      },
    }),
  },
}));

export default {
  ContactForm,
};
