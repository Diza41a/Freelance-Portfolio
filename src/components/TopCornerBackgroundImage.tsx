import { styled } from '@mui/material';
import PageTopRightCornerImage from '../assets/images/PageTopRightCorner.svg';

const TopCornerBackgroundImageWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: theme.zIndexes.backgroundImages,

  img: {
    position: 'relative',
    width: '50%',
    right: '-50%',
  },

  [theme.breakpoints.up('desktop')]: {
    img: {
      width: '75%',
      right: '-25%',
    },
  },
}));

const TopCornerBackgroundImage = () => {
  return (
    <TopCornerBackgroundImageWrapper>
      <img src={PageTopRightCornerImage} alt="" />
    </TopCornerBackgroundImageWrapper>
  );
};

export default TopCornerBackgroundImage;
