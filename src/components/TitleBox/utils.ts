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

const generateDescriptionTween = () =>
  generateSlideInTween({
    cssSelector: `.${classNames.description}`,
    scrollTriggerSelector: `.${classNames.titleContainer}`,
    withScrollTrigger: false,
    scrollDirection: 'right',
  });

export const generateTitleBoxTimeline = () => {
  const timeline = gsap.timeline();
  timeline.add(generateTitleTextTween());
  timeline.add(generateBreadcrumbsTween(), '-=0.85');
  timeline.add(generateDescriptionTween(), '-=0.85');
  return timeline;
};
