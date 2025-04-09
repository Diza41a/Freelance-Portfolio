import { styled } from '@mui/material';

import { classNames as projectCardClassNames } from '../../../components/ProjectCard/styles';
import { responsive } from '../../../utils/styleUtils';

export const classNames = {};

const ProjectsGridContainer = styled('div')(() => {
  // Preserving the 16:9 aspect ratio for the cover image
  const desktopCoverImageHeight = `calc(40vw * 0.5625 - 18px)`;

  return {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...responsive({
      default: {
        gap: '16px 0',
      },
      tablet: {
        gap: '24px 0',
      },
      largeDesktop: {
        gap: '32px 18px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      },
    }),

    [`.${projectCardClassNames.root}`]: {
      ...responsive({
        largeDesktop: {
          flexBasis: 'calc(50% - 16px)',
        },
      }),

      [`.${projectCardClassNames.coverImage}`]: {
        objectFit: 'cover',
        ...responsive({
          largeDesktop: {
            height: desktopCoverImageHeight,
          },
        }),
      },
    },
  };
});

export default {
  ProjectsGridContainer,
};
