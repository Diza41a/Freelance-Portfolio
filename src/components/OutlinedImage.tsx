import { styled } from '@mui/material';

const OutlinedImage = styled('img')(({ theme }) => ({
  outline: `solid 1px ${theme.colors.border.secondary}`,
  outlineOffset: -8,
  borderRadius: 6,

  [theme.breakpoints.up('desktop')]: {
    outlineOffset: -12,
  },
}));

export default OutlinedImage;
