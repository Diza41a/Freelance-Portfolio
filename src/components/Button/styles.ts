import { scalePadding, scaleFontSize } from '../../utils/styleUtils';
import { styled, Button as MuiButton } from '@mui/material';
import type { ButtonProps } from './props';
import type { CSSProperties } from 'react';

export const classNames = {
  root: 'Button',
};

const Button = styled(MuiButton, {
  shouldForwardProp: (prop: string) =>
    !['styleVariant', 'borderRadius', 'padding', 'fontSize'].includes(prop),
})<ButtonProps>(({
  theme,
  styleVariant,
  fontSize = 16,
  padding = '8px 16px',
  borderRadius = 8,
  disabled,
}) => {
  const buttonStyleProps: CSSProperties = (() => {
    if (styleVariant === 'secondary') {
      return {
        backgroundColor: theme.colors.action.secondary.background,
        color: theme.colors.action.secondary.text,
        fontFamily: theme.fonts.main,
      };
    } else if (styleVariant === 'link') {
      return {
        backgroundColor: theme.colors.action.link.background,
        color: theme.colors.action.link.text,
        fontFamily: theme.fonts.main,
        textTransform: 'none',
      };
    }

    return {
      backgroundColor: theme.colors.action.primary.background,
      color: theme.colors.action.primary.text,
      fontFamily: theme.fonts.main,
    };
  })();

  return {
    ...buttonStyleProps,
    borderRadius,
    fontSize: scaleFontSize(fontSize, 'mobile'),
    padding: scalePadding(padding, 'mobile'),
    transition: 'transform 0.3s ease-in-out',
    ...(disabled && { cursor: 'not-allowed' }),

    '&:hover': {
      transform: 'translateY(-2px)',
    },

    [theme.breakpoints.up('tablet')]: {
      fontSize,
      padding,
    },
  };
});

export default {
  Button,
};
