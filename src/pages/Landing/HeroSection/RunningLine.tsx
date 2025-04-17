import { styled } from '@mui/material';

const classNames = {
  content: 'Landing-HeroSection-RunningLineContent',
};

const RunningLineContainer = styled('div')(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  backgroundColor: theme.colors.surface.attention,
  position: 'relative',
  zIndex: 10,

  [`.${classNames.content}`]: {
    display: 'inline-block',
    animation: 'runningLine 50s linear infinite',
    color: theme.colors.text.secondary[100],
    fontFamily: theme.fonts.secondary,
    padding: '8px 0',
    fontSize: 14,
  },

  '@keyframes runningLine': {
    '0%': {
      transform: 'translateX(0%)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },

  [theme.breakpoints.up('desktop')]: {
    [`.${classNames.content}`]: {
      fontSize: 16,
    },
  },
}));

const SKILLS = [
  'Full-Stack Web Development',
  'TypeScript & JavaScript',
  'React.js (Hooks, Router, Context)',
  'Responsive Styled Components',
  'Node.js & Express.js',
  'Nest.js',
  'MongoDB & Mongoose',
  'REST API Development',
  'Third-Party API Integration',
  'Frontend Architecture',
  'Backend Logic & Data Modeling',
];

const RunningLine = () => {
  return (
    <RunningLineContainer>
      <div className={classNames.content}>
        <span>{` • ${SKILLS.join(' • ')} • `}</span>
        <span>{SKILLS.join(' • ')}</span>
      </div>
    </RunningLineContainer>
  );
};

export default RunningLine;
