import { Typography } from '@mui/material';
import S, { classNames } from './styles';
import { useVisitedGSAP } from '../../../hooks/useVisitedGSAP';
import { generateDevProcessSectionTimeline } from './utils';
import ResearchStepImg from '../../../assets/images/research_step.jpg';
import ProposalStepImg from '../../../assets/images/proposal_step.jpg';
import DevelopmentStepImg from '../../../assets/images/development_step.jpg';
import DeploymentStepImg from '../../../assets/images/deployment_step.jpg';

const DEV_PROCESS_STEPS = [
  {
    title: 'Research',
    description:
      'Introductions! I conduct initial research to understand your niche and goals for the project.',
    imgPath: ResearchStepImg,
  },
  {
    title: 'Proposal',
    description:
      'I create a proposal outlining the timeline, scope, and the cost of the project, and gather resources from you.',
    imgPath: ProposalStepImg,
  },
  {
    title: 'Development',
    description:
      'I develop the core features, provide updates and demos, and iterate based on your feedback.',
    imgPath: DevelopmentStepImg,
  },
  {
    title: 'Deployment',
    description: 'I deploy the project and address general maintenance inquires.',
    imgPath: DeploymentStepImg,
  },
];

const DevProcessSection = () => {
  useVisitedGSAP(() => {
    generateDevProcessSectionTimeline();
  });

  return (
    <S.DevProcessSection className={classNames.root}>
      <Typography variant="h2" className={classNames.title}>
        My Development Process
      </Typography>
      <div className={classNames.cardsContainer}>
        {DEV_PROCESS_STEPS.map((step, i) => (
          <div className={classNames.cardContainer} key={step.title}>
            <div className={classNames.card}>
              <div className={classNames.cardTextContainer}>
                <Typography variant="body1" className={classNames.cardNumber}>
                  0{i + 1}
                </Typography>
                <Typography variant="h3" className={classNames.cardTitle}>
                  {step.title}
                </Typography>
                <Typography variant="body2" className={classNames.cardDescription}>
                  {step.description}
                </Typography>
              </div>
              <div className={classNames.cardImageContainer}>
                <img draggable={false} src={step.imgPath} alt={step.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </S.DevProcessSection>
  );
};

export default DevProcessSection;
