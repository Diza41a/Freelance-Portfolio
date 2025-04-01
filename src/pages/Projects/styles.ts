import { styled } from '@mui/material';

const ProjectsPage = styled('div')(({ theme }) => ({
  padding: '0 5%',

  [theme.breakpoints.up('desktop')]: {
    padding: '0 10%',
  },
}));

export default {
  ProjectsPage,
};
