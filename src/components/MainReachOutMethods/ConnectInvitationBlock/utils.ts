import { classNames } from './styles';
import { generateDivFadeInTween } from '../../../utils/gsapUtils';

export const generateConnectionInvitationBlockTween = () =>
  generateDivFadeInTween({
    cssSelector: `.${classNames.root}`,
    scrollTriggerSelector: `.${classNames.root}`,
  });
