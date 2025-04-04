import { styled } from '@mui/material';
import { NavLink } from 'react-router';

export const classNames = {
  root: 'ProjectCard',
  coverImage: 'ProjectCard-CoverImage',
  title: 'ProjectCard-Title',
  subtitle: 'ProjectCard-Subtitle',
  technologies: 'ProjectCard-Technologies',
};

const ProjectCard = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',

  [`.${classNames.coverImage}`]: {
    width: '100%',
    marginBottom: 12,
  },

  [`.${classNames.title}`]: {
    marginBottom: 6,
  },

  [`.${classNames.subtitle}`]: {
    textTransform: 'uppercase',
    marginBottom: 10,
  },

  [`.${classNames.technologies}`]: {
    span: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  },

  [theme.breakpoints.up('desktop')]: {
    [`.${classNames.coverImage}`]: {
      marginBottom: 16,
    },

    [`.${classNames.title}`]: {
      marginBottom: 8,
    },

    [`.${classNames.subtitle}`]: {
      marginBottom: 12,
    },
  },
}));

export const S = {
  ProjectCard,
};
