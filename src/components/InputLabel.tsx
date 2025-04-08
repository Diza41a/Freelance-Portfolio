import { InputLabel as MuiInputLabel, styled } from '@mui/material';
import { responsive, scaleFontSize } from '../utils/styleUtils';

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  color: theme.colors.text.primary[400],
  textTransform: 'uppercase',

  ...responsive({
    default: {
      fontSize: scaleFontSize(14, 'mobile'),
      marginBottom: 4,
    },
    desktop: {
      fontSize: 14,
      marginBottom: 6,
    },
  }),

  '.MuiInputLabel-asterisk': {
    color: theme.colors.text.error,
  },
}));

export default InputLabel;
