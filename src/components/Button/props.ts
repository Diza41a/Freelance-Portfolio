import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { AnchorHTMLAttributes } from 'react';

export interface ButtonProps extends Omit<MuiButtonProps, 'disableRipple'> {
  styleVariant?: 'primary' | 'secondary' | 'link';
  fontSize?: string | number;
  borderRadius?: string | number;
  padding?: string | number;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
}
