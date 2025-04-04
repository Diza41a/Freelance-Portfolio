import { styled } from '@mui/material';

import { classNames as projectCardClassNames } from '../../../components/ProjectCard/styles';

export const classNames = {};

const ProjectsGridContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px 0',

  [`.${projectCardClassNames.root}`]: {
    [`.${projectCardClassNames.coverImage}`]: {
      height: 200,
      objectFit: 'cover',
    },
  },

  [theme.breakpoints.up('tablet')]: {
    gap: '24px 0',

    [`.${projectCardClassNames.root}`]: {
      [`.${projectCardClassNames.coverImage}`]: {
        height: 350,
      },
    },
  },

  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '32px 18px',

    [`.${projectCardClassNames.root}`]: {
      flexBasis: 'calc(50% - 9px)',

      [`.${projectCardClassNames.coverImage}`]: {
        height: 250,
      },
    },
  },

  [theme.breakpoints.up('largeDesktop')]: {
    justifyContent: 'center',

    [`.${projectCardClassNames.root}`]: {
      flexBasis: 'unset',
      minWidth: 550,
      width: 'calc(33.33% - 12px)',

      [`.${projectCardClassNames.coverImage}`]: {
        height: 450,
      },
    },
  },
}));

export const S = {
  ProjectsGridContainer,
};
