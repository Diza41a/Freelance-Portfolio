import gsap from 'gsap';

export const generateTitleTween = ({
  cssSelector,
  scrollTriggerSelector = '',
  withScrollTrigger = true,
}: {
  cssSelector: string;
  scrollTriggerSelector?: string;
  withScrollTrigger?: boolean;
}) => {
  const tweenConfig: gsap.TweenVars = {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power4.out',
  };

  if (withScrollTrigger && scrollTriggerSelector) {
    tweenConfig.scrollTrigger = {
      trigger: scrollTriggerSelector,
      start: 'top 80%',
      end: 'bottom 20%',
    };
  }

  return gsap.fromTo(cssSelector, { opacity: 0, scale: 0.5 }, tweenConfig);
};

export const generateDivFadeInTween = ({
  cssSelector,
  scrollTriggerSelector = '',
  withScrollTrigger = true,
  stagger = 0,
}: {
  cssSelector: string;
  scrollTriggerSelector?: string;
  withScrollTrigger?: boolean;
  stagger?: number;
}) => {
  const tweenConfig: gsap.TweenVars = {
    opacity: 1,
    duration: 0.75,
    ease: 'linear',
    stagger,
  };

  if (withScrollTrigger && scrollTriggerSelector) {
    tweenConfig.scrollTrigger = {
      trigger: scrollTriggerSelector,
      start: 'top 80%',
      end: 'bottom 20%',
    };
  }

  return gsap.fromTo(cssSelector, { opacity: 0 }, tweenConfig);
};

export const generateSlideInTween = ({
  scrollDirection,
  cssSelector,
  scrollTriggerSelector = '',
  withScrollTrigger = true,
  stagger = 0,
}: {
  scrollDirection: 'top' | 'bottom' | 'left' | 'right';
  cssSelector: string;
  scrollTriggerSelector?: string;
  withScrollTrigger?: boolean;
  stagger?: number;
}) => {
  const tweenConfig: gsap.TweenVars = {
    opacity: 1,
    duration: 0.75,
    x: 0,
    y: 0,
    ease: 'power2.out',
    stagger,
  };

  if (withScrollTrigger && scrollTriggerSelector) {
    tweenConfig.scrollTrigger = {
      trigger: scrollTriggerSelector,
      start: 'top 80%',
      end: 'bottom 20%',
    };
  }

  let initialX: string | number = 0;
  if (scrollDirection === 'left') initialX = '-35%';
  else if (scrollDirection === 'right') initialX = '35%';
  let initialY: string | number = 0;
  if (scrollDirection === 'top') initialY = '-75%';
  else if (scrollDirection === 'bottom') initialY = '75%';

  const initialStyles = {
    x: initialX,
    y: initialY,
    opacity: 0,
  };

  return gsap.fromTo(cssSelector, initialStyles, tweenConfig);
};
