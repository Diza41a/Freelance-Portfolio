import { generateSlideInTween } from '../../../utils/gsapUtils';
import { classNames } from './styles';

export const generateContactFormTween = () =>
  generateSlideInTween({
    cssSelector: `.${classNames.root}`,
    scrollTriggerSelector: `.${classNames.root}`,
    scrollDirection: 'right',
  });
