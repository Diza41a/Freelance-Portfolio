import type { ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'disableRipple'> {
  styleVariant?: 'primary' | 'secondary' | 'link';
  fontSize?: string | number;
  borderRadius: string | number;
  padding: string | number;
}
