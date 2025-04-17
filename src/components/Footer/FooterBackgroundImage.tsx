import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/material';
import FooterBackgroundImg from '../../assets/images/FooterBackground.svg';
import { useRef } from 'react';

export const classNames = {
  root: 'Footer-BackgroundImageContainer',
};

const StyledBackgroundImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '-25%',
  right: 0,
  zIndex: theme.zIndexes.backgroundImages,
  ...(theme.name === 'night' && { filter: 'invert(1)' }),

  img: {
    position: 'relative',
    width: '65%',
    right: '-61%',
    opacity: 0.1,
  },

  [theme.breakpoints.up('desktop')]: {
    bottom: '-35%',

    img: {
      width: '70%',
      right: '-40%',
    },
  },
}));

const FooterBackgroundImage = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });
  useGSAP(() => {
    tl.fromTo(
      imageContainerRef.current,
      { rotate: 4 },
      { rotate: -14, duration: 15, ease: 'sine' },
    );
  }, []);

  return (
    <StyledBackgroundImageContainer ref={imageContainerRef} className={classNames.root}>
      <img src={FooterBackgroundImg} alt="" draggable={false} />
    </StyledBackgroundImageContainer>
  );
};

export default FooterBackgroundImage;
