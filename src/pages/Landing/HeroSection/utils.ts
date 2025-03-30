import gsap from 'gsap';
import { classNames } from './styles';
import {
  generateDivFadeInTween,
  generateSlideInTween,
  generateTitleTween,
} from '../../../utils/gsapUtils';

const generateProfilePhotoTween = () =>
  gsap.fromTo(
    `.${classNames.bodyContainerImageContainer}`,
    { y: '75%', opacity: 0.25 },
    { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out' },
  );

const generateTitleTextTween = () =>
  generateTitleTween({
    cssSelector: `.${classNames.titleContainer}>h1`,
    scrollTriggerSelector: `.${classNames.titleContainer}`,
    withScrollTrigger: false,
  });

const generateBodyContainerTextTween = () =>
  generateSlideInTween({
    scrollDirection: 'right',
    cssSelector: `.${classNames.bodyContainerText}`,
    scrollTriggerSelector: `.${classNames.bodyContainer}`,
    withScrollTrigger: false,
  });

const generateActionButtonsTween = () =>
  generateDivFadeInTween({
    cssSelector: `.${classNames.bodyContainerActionButtons}`,
    scrollTriggerSelector: `.${classNames.bodyContainer}`,
    withScrollTrigger: false,
  });

const generateLinksTween = () =>
  generateDivFadeInTween({
    cssSelector: `.${classNames.bodyContainerLinks}`,
    scrollTriggerSelector: `.${classNames.bodyContainer}`,
    withScrollTrigger: false,
  });

export const createHeroSectionTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.root}`,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  });

  timeline.add(generateProfilePhotoTween());
  timeline.add(generateTitleTextTween(), '-=0.65');
  timeline.add(generateBodyContainerTextTween(), '-=1');
  timeline.add(generateActionButtonsTween(), '-=0.95');
  timeline.add(generateLinksTween(), '-=0.75');
};
