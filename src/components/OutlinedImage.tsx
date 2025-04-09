import { styled } from '@mui/material';

const OutlinedImage = styled('img')(({ theme }) => ({
  outline: `solid 1px ${theme.colors.border.secondary}`,
  outlineOffset: -4,
  borderRadius: 6,
}));

export default OutlinedImage;
