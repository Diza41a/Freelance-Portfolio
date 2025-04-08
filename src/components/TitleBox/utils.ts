import gsap from 'gsap';
import {
  generateTitleTween,
  generateDivFadeInTween,
  generateSlideInTween,
} from '../../utils/gsapUtils';
import { classNames } from './styles';

const generateTitleTextTween = () =>
  generateTitleTween({
    cssSelector: `.${classNames.titleContainer}>h2`,
    scrollTriggerSelector: `.${classNames.titleContainer}`,
    withScrollTrigger: false,
  });

const generateBreadcrumbsTween = () =>
  generateDivFadeInTween({
    cssSelector: `.${classNames.breadcrumbs}`,
    scrollTriggerSelector: `.${classNames.titleContainer}`,
    withScrollTrigger: false,
  });

const generateDescriptionTween = () => {
  const descriptionEl = document.querySelector(`.${classNames.description}`);
  if (!descriptionEl) return null;

  return generateSlideInTween({
    cssSelector: `.${classNames.description}`,
    scrollTriggerSelector: `.${classNames.titleContainer}`,
    withScrollTrigger: false,
    scrollDirection: 'right',
  });
};

export const generateTitleBoxTimeline = () => {
  const timeline = gsap.timeline();
  timeline.add(generateTitleTextTween());
  timeline.add(generateBreadcrumbsTween(), '-=0.85');
  const descriptionTween = generateDescriptionTween();
  if (descriptionTween) timeline.add(descriptionTween, '-=0.85');
  return timeline;
};
