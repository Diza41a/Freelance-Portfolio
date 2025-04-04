import gsap from 'gsap';
import { generateTitleBoxTimeline } from '../../components/TitleBox/utils';
import { classNames } from './styles';
import { classNames as projectCardClassNames } from '../../components/ProjectCard/styles';
import { generateSlideInTween } from '../../utils/gsapUtils';

const generateProjectGridCardsTween = () =>
  generateSlideInTween({
    cssSelector: `.${projectCardClassNames.root}`,
    scrollDirection: 'bottom',
    withScrollTrigger: false,
    stagger: 0.1,
  });

export const generateProjectsPageTimeline = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: `.${classNames.root}`,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  });

  timeline.add(generateTitleBoxTimeline(), 0);
  timeline.add(generateProjectGridCardsTween(), '-=0.5');
};
