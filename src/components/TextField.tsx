import { styled, TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { responsive, scaleFontSize } from '../utils/styleUtils';

type UniqueTextFieldProps = {
  styleVariant?: 'default' | 'filled';
};

type TextFieldProps = MuiTextFieldProps & UniqueTextFieldProps;

export const classNames = { root: 'TextField' };

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== 'styleVariant',
})<UniqueTextFieldProps>(({ theme, styleVariant = 'default' }) => ({
  '.MuiInputBase-root': {
    padding: 0,
    borderRadius: 8,
    backgroundColor:
      styleVariant === 'filled'
        ? theme.colors.surface.primary[200]
        : theme.colors.surface.primary[100],
  },

  'input, textarea': {
    ...theme.typography.body2,
    ...responsive({
      default: {
        padding: 14,
        fontSize: scaleFontSize(18, 'mobile'),
      },
      desktop: {
        padding: 22,
        fontSize: 18,
      },
    }),
  },

  '.MuiFormHelperText-root': {
    fontFamily: theme.fonts.secondary,
  },

  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: styleVariant === 'filled' ? 'none' : `1px solid ${theme.colors.border.primary}`,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.colors.decorative.primary}`,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.colors.decorative.primary}`,
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.colors.text.error}`,
    },
  },
}));

const TextField = (props: TextFieldProps) => {
  const { className, ...rest } = props;
  const textFieldClassNames = [classNames.root];
  if (className) textFieldClassNames.push(className);

  return <StyledTextField className={textFieldClassNames.join(' ')} {...rest} />;
};

export default TextField;
