import { styled } from '@mui/material';

const OutlinedImage = styled('img')(({ theme }) => ({
  outline: `solid 1px ${theme.colors.border.secondary}`,
  outlineOffset: -12,
  borderRadius: 6,

  [theme.breakpoints.up('desktop')]: {
    outlineOffset: -16,
  },
}));

export default OutlinedImage;
