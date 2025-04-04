import { styled } from '@mui/material';

export const classNames = {
  root: 'Projects',
};

const ProjectsPage = styled('div')(({ theme }) => ({
  padding: '0 5% 24px 5%',
  overflow: 'hidden',

  [theme.breakpoints.up('desktop')]: {
    padding: '0 10% 60px 10%',
  },
}));

export default {
  ProjectsPage,
};
