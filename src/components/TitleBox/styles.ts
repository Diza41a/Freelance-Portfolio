import { styled } from '@mui/material';

export const classNames = {
  root: 'TitleBox',
  titleContainer: 'TitleBox-TitleContainer',
  breadcrumbs: 'TitleBox-Breadcrumbs',
  description: 'TitleBox-Description',
};

interface TitleBoxStyledProps {
  hasDescription: boolean;
}

const TitleBoxContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasDescription',
})<TitleBoxStyledProps>(({ theme, hasDescription }) => ({
  margin: '40px 0',
  display: 'flex',
  flexDirection: 'column',

  [`.${classNames.titleContainer}`]: {
    flexBasis: hasDescription ? '45%' : '100%',
    h2: {
      marginBottom: 14,
      width: 'fit-content',
    },

    'li, li>*': {
      textTransform: 'uppercase',
      fontSize: 14,
      color: theme.colors.text.primary[500],
    },

    a: {
      color: theme.colors.decorative.primary,
      position: 'relative',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 1,
        width: 0,
        backgroundColor: theme.colors.decorative.primary,
      },

      '&:hover::after': {
        width: '100%',
      },
    },
  },

  [`.${classNames.description}`]: {
    margin: '14px 0',
  },

  [theme.breakpoints.up('desktop')]: {
    margin: '80px 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,

    [`.${classNames.titleContainer}`]: {
      h2: {
        marginBottom: 16,
      },

      'li, li>*': {
        fontSize: 16,
      },
    },

    [`.${classNames.description}`]: {
      flexBasis: '40%',
      margin: '16px 0',
    },
  },
}));

export default {
  TitleBoxContainer,
};
