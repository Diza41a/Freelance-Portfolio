import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/material';
import PageTopRightCornerImage from '../assets/images/PageTopRightCorner.svg';
import { useRef } from 'react';

const TopCornerBackgroundImageWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: theme.zIndexes.backgroundImages,

  img: {
    position: 'relative',
    width: '65%',
    right: '-61%',
  },

  [theme.breakpoints.up('desktop')]: {
    img: {
      width: '70%',
      right: '-60%',
    },
  },
}));

const TopCornerBackgroundImage = () => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
  useGSAP(() => {
    tl.fromTo(imageWrapperRef.current, { rotate: -14 }, { rotate: 4, duration: 15, ease: 'sine' });
  }, []);

  return (
    <TopCornerBackgroundImageWrapper ref={imageWrapperRef}>
      <img src={PageTopRightCornerImage} alt="" />
    </TopCornerBackgroundImageWrapper>
  );
};

export default TopCornerBackgroundImage;
