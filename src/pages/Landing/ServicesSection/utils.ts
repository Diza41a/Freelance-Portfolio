import gsap from 'gsap';
import { generateSlideInTween, generateTitleTween } from '../../../utils/gsapUtils';
import { classNames } from './styles';

const generateServicesTitleTween = () =>
  generateTitleTween({
    cssSelector: `.${classNames.title}`,
    scrollTriggerSelector: `.${classNames.servicesContainer}`,
    withScrollTrigger: false,
  });

const generateServiceCardTween = () =>
  generateSlideInTween({
    scrollDirection: 'bottom',
    cssSelector: `.${classNames.serviceCard}`,
    scrollTriggerSelector: `.${classNames.servicesContainer}`,
    withScrollTrigger: false,
    stagger: 0.25,
  });

export const createServicesSectionTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.root}`,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  });

  timeline.add(generateServicesTitleTween());
  timeline.add(generateServiceCardTween(), '-=0.75');
};
