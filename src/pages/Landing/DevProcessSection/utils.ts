import gsap from 'gsap';
import { generateSlideInTween, generateTitleTween } from '../../../utils/gsapUtils';
import { classNames } from './styles';

const generateDevProcessTitleTween = () =>
  generateTitleTween({
    cssSelector: `.${classNames.title}`,
  });

const generateDevProcessCardsTween = () => {
  return generateSlideInTween({
    scrollDirection: 'bottom',
    cssSelector: `.${classNames.cardContainer}`,
    scrollTriggerSelector: `.${classNames.root}`,
    withScrollTrigger: false,
    stagger: 0.25,
  });
};

export const generateDevProcessSectionTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.root}`,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  });

  timeline.add(generateDevProcessTitleTween());
  timeline.add(generateDevProcessCardsTween(), '-=0.75');

  return timeline;
};
