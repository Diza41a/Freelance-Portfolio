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
    transition: 'box-shadow 0.2s ease-in-out',
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

  '&:hover': {
    [`.${classNames.coverImage}`]: {
      ...(theme.name === 'night' && {
        boxShadow: `0 0 10px 0 ${theme.colors.decorative.secondary}`,
      }),
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
