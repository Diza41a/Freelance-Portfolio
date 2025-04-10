import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/material';
import PageTopRightCornerImage from '../assets/images/PageTopRightCorner.svg';
import { useRef } from 'react';

export const classNames = {
  root: 'TopCornerBackgroundImageContainer',
};

const TopCornerBackgroundImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: theme.zIndexes.backgroundImages,
  ...(theme.name === 'night' && { filter: 'invert(1)' }),

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
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
  useGSAP(() => {
    tl.fromTo(
      imageContainerRef.current,
      { rotate: -14 },
      { rotate: 4, duration: 15, ease: 'sine' },
    );
  }, []);

  return (
    <TopCornerBackgroundImageContainer ref={imageContainerRef} className={classNames.root}>
      <img src={PageTopRightCornerImage} alt="" />
    </TopCornerBackgroundImageContainer>
  );
};

export default TopCornerBackgroundImage;
