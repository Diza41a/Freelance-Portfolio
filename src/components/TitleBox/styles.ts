import { styled } from '@mui/material';

export const classNames = {
  titleContainer: 'TitleBox-TitleContainer',
  descriptionContainer: 'TitleBox-DescriptionContainer',
};

const TitleBoxContainer = styled('div')(({ theme }) => ({
  margin: '40px 0',
  display: 'flex',

  [theme.breakpoints.up('desktop')]: {
    margin: '80px 0',
  },
}));

export default {
  TitleBoxContainer,
};
