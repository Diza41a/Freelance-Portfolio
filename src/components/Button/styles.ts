import { scalePadding, scaleFontSize } from '../../utils/styleUtils';
import { styled, Button as MuiButton } from '@mui/material';
import type { ButtonProps } from './props';
import type { CSSProperties } from 'react';

const Button = styled(MuiButton, {
  shouldForwardProp: (prop: string) =>
    !['styleVariant', 'borderRadius', 'padding', 'fontSize'].includes(prop),
})<ButtonProps>(({ theme, styleVariant, fontSize = 16, padding, borderRadius }) => {
  const buttonStyleProps: CSSProperties = (() => {
    if (styleVariant === 'secondary') {
      return {
        backgroundColor: theme.button.secondary.colors.background,
        color: theme.button.secondary.colors.text,
        fontFamily: theme.fonts.main,
      };
    } else if (styleVariant === 'link') {
      return {
        backgroundColor: theme.button.link.colors.background,
        color: theme.button.link.colors.text,
        fontFamily: theme.fonts.main,
        textTransform: 'none',
      };
    }

    return {
      backgroundColor: theme.button.primary.colors.background,
      color: theme.button.primary.colors.text,
      fontFamily: theme.fonts.main,
    };
  })();

  return {
    ...buttonStyleProps,
    borderRadius,
    fontSize: scaleFontSize(fontSize, 'mobile'),
    padding: scalePadding(padding, 'mobile'),

    [theme.breakpoints.up('tablet')]: {
      fontSize,
      padding,
    },
  };
});

export default {
  Button,
};
