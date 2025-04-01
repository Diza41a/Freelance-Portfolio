import { styled } from '@mui/material';
import type { CSSProperties } from 'react';
import type { LinkProps } from './props';
import { scaleFontSize } from '../../utils/styleUtils';

export const classNames = {
  textWrapper: 'Link-TextWrapper',
  text: 'Link-Text',
  icon: 'Link-Icon',
};

const Link = styled('a', {
  shouldForwardProp: (prop: string) => !['variant', 'showLinkIcon'].includes(prop),
})<LinkProps>(({ theme, showLinkIcon = false }) => {
  const linkStyleProps: CSSProperties = {
    fontFamily: theme.fonts.tertiary,
    textTransform: 'uppercase',
    color: theme.colors.text.primary[100],
  };

  return {
    ...linkStyleProps,
    textDecoration: 'none',

    [`.${classNames.textWrapper}`]: {
      fontSize: scaleFontSize(20, 'mobile'),
      display: 'flex',
      alignItems: 'center',
      position: 'relative',

      [`.${classNames.text}`]: {
        ...(showLinkIcon && { marginRight: 3 }),
      },

      [`.${classNames.icon}`]: {
        color: theme.colors.decorative.primary,
        width: 18,
        height: 18,
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 2,
        width: 0,
        backgroundColor: theme.colors.text.primary[100],
        transition: 'width 0.1s linear',
      },

      '&:hover': {
        '&::after': {
          width: showLinkIcon ? 'calc(100% - 21px)' : '100%',
        },
      },
    },

    [theme.breakpoints.up('desktop')]: {
      [`.${classNames.textWrapper}`]: {
        fontSize: 20,

        [`.${classNames.text}`]: {
          ...(showLinkIcon && { marginRight: 4 }),
        },

        [`.${classNames.icon}`]: {
          width: 22,
          height: 22,
        },

        '&:hover': {
          '&::after': {
            width: showLinkIcon ? 'calc(100% - 26px)' : '100%',
          },
        },
      },
    },
  };
});

export default {
  Link,
};
