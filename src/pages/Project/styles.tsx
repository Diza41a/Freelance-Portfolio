import { alpha, styled } from '@mui/material';
import { HEADER_HEIGHT_DESKTOP } from '../../components/Header/styles';
import { responsive, scaleFontSize } from '../../utils/styleUtils';
import { classNames as buttonClassNames } from '../../components/Button/styles';
import { classNames as projectCardClassNames } from '../../components/ProjectCard/styles';

export const classNames = {
  titleBox: 'Project-TitleBox',
  titleBoxTextContainer: 'Project-TitleBoxTextContainer',
  breadcrumbs: 'Project-Breadcrumbs',
  body: 'Project-Body',
  overviewContainer: 'Project-OverviewContainer',
  metaContainer: 'Project-MetaContainer',
  technologies: 'Project-Technologies',
  descriptionContainer: 'Project-DescriptionContainer',
  descriptionBody: 'Project-DescriptionBody',
  media: 'Project-Media',
  detailsBlock: 'Project-DetailsBlock',
  feedbackContainer: 'Project-FeedbackContainer',
  feedbackText: 'Project-FeedbackText',
  feedbackAuthor: 'Project-FeedbackAuthor',
  navButtonsContainer: 'Project-NavButtonsContainer',
  navButtons: 'Project-NavButtons',
  prevProjectButton: 'Project-PrevProjectButton',
  nextProjectButton: 'Project-NextProjectButton',
};

const ProjectPage = styled('div')(({ theme }) => ({
  [`.${classNames.titleBox}`]: {
    position: 'relative',

    img: {
      ...responsive({
        default: {
          display: 'block',
          width: '100%',
          borderTop: `solid 1px ${theme.colors.border.primary}`,
          borderBottom: `solid 1px ${theme.colors.border.primary}`,
        },
        desktop: {
          maxHeight: `calc(100vh - ${HEADER_HEIGHT_DESKTOP}px - 1px)`,
          borderBottom: 'none',
          objectFit: 'cover',
        },
      }),
    },

    [`.${classNames.titleBoxTextContainer}`]: {
      ...responsive({
        default: {
          padding: '20px 5% 12px 5%',
        },
        tablet: {
          padding: '20px 5%',
          backgroundColor: alpha(theme.colors.surface.secondary[100], 0.75),
          position: 'absolute',
          bottom: 0,
        },
        desktop: {
          padding: '40px 5%',
        },
      }),

      h2: {
        ...responsive({
          tablet: {
            color: theme.colors.text.secondary[100],
          },
        }),
      },

      [`.${classNames.breadcrumbs}`]: {
        'li, li>*': {
          ...responsive({
            default: {
              fontSize: 14,
            },
            tablet: {
              color: theme.colors.text.secondary[100],
            },
            desktop: {
              fontSize: 16,
            },
          }),
        },

        a: {
          ...responsive({
            default: {
              color: theme.colors.decorative.primary,
              position: 'relative',
            },
            tablet: {
              color: theme.colors.decorative.secondary,
            },
          }),

          '&::after': {
            ...responsive({
              default: {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: 1,
                width: 0,
                backgroundColor: theme.colors.decorative.primary,

                '&:hover::after': {
                  width: '100%',
                },
              },
              tablet: {
                backgroundColor: theme.colors.decorative.secondary,
              },
            }),
          },
        },
      },
    },
  },

  [`.${classNames.body}`]: {
    ...responsive({
      default: {
        padding: '0 5%',
        marginTop: 24,
      },
      desktop: {
        padding: '0 10%',
        marginTop: 80,
      },
    }),

    hr: {
      backgroundColor: theme.colors.border.primary,
      ...responsive({
        default: {
          margin: '16px 0',
        },
        desktop: {
          margin: '32px 0',
        },
      }),
    },

    [`.${classNames.overviewContainer}`]: {
      display: 'flex',
      ...responsive({
        default: {
          flexDirection: 'column',
          gap: 24,
        },
        desktop: {
          flexDirection: 'row',
          gap: 60,
        },
      }),

      [`.${classNames.metaContainer}`]: {
        ...responsive({
          desktop: {
            flexShrink: 0,
            flexBasis: 'calc(42.5% - 60px)',
          },
        }),

        h4: {
          ...responsive({
            default: {
              marginBottom: 16,
            },
            desktop: {
              marginBottom: 20,
            },
          }),
        },

        h5: {
          ...responsive({
            default: {
              textTransform: 'none',
              marginBottom: 6,
            },
            desktop: {
              marginBottom: 8,
            },
          }),
        },

        ul: {
          display: 'flex',
          flexWrap: 'wrap',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          ...responsive({
            default: {
              gap: 6,
            },
            desktop: {
              gap: 8,
            },
          }),

          li: {
            backgroundColor: theme.colors.surface.primary[200],
            borderRadius: 20,
            ...responsive({
              default: {
                padding: '6px 12px',
              },
              desktop: {
                padding: '8px 16px',
              },
            }),
          },
        },

        [`.${classNames.technologies}`]: {
          textTransform: 'uppercase',
        },

        [`.${buttonClassNames.root}`]: {
          width: '100%',
          ...responsive({
            default: {
              marginTop: 8,
            },
            desktop: {
              marginTop: 12,
            },
          }),

          '&:first-of-type': {
            ...responsive({
              default: {
                marginTop: 25,
              },
              desktop: {
                marginTop: 60,
              },
            }),
          },
        },
      },

      [`.${classNames.descriptionContainer}`]: {
        h3: {
          textTransform: 'none',
        },

        [`.${classNames.descriptionBody}`]: {
          ...responsive({
            default: {
              marginTop: 16,
            },
            desktop: {
              marginTop: 24,
            },
          }),
        },
      },
    },

    [`.${classNames.media}`]: {
      width: '100%',
      borderRadius: 8,
      ...responsive({
        default: {
          margin: '24px 0',
        },
        desktop: {
          margin: '60px 0',
        },
      }),
    },

    [`.${classNames.detailsBlock}`]: {
      display: 'flex',
      ...responsive({
        default: {
          flexDirection: 'column',
        },
        desktop: {
          flexDirection: 'row',
          gap: 60,
        },
      }),

      h4: {
        ...responsive({
          default: {
            marginBottom: 8,
          },
          desktop: {
            marginBottom: 16,
            flexShrink: 0,
            flexBasis: 'calc(42.5% - 60px)',
          },
        }),
      },

      '>div': {
        flexGrow: 1,

        ul: {
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          ...responsive({
            default: {
              gap: 6,
            },
            desktop: {
              gap: 8,
            },
          }),

          li: {
            ...responsive({
              default: {
                marginLeft: scaleFontSize(18, 'mobile'),
              },
              desktop: {
                marginLeft: 18,
              },
            }),
          },

          'li::marker': {
            color: theme.colors.decorative.primary,
          },
        },

        [`&.${classNames.feedbackContainer}`]: {
          [`.${classNames.feedbackText}`]: {
            ...responsive({
              default: {
                marginBottom: 8,
              },
              desktop: {
                marginBottom: 16,
              },
            }),
          },
        },
      },
    },

    '& > *:last-child': {
      marginBottom: 0,
    },
  },

  [`.${classNames.navButtonsContainer}`]: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    ...responsive({
      default: {
        padding: '0 5%',
        margin: '24px 0',
      },
      desktop: {
        padding: '0 10%',
        margin: '80px 0',
      },
    }),

    h3: {
      ...responsive({
        default: {
          textTransform: 'none',
          marginBottom: 16,
        },
        desktop: {
          marginBottom: 32,
        },
      }),
    },

    [`.${classNames.navButtons}`]: {
      ...responsive({
        default: {
          display: 'flex',
          flexDirection: 'column',
          rowGap: 14,
        },
        tablet: {
          flexDirection: 'row',
          columnGap: 14,
        },
        desktop: {
          columnGap: 18,
        },
      }),

      '>a': {
        ...responsive({
          tablet: {
            flexBasis: 'calc(50% - 14px)',
          },
          desktop: {
            flexBasis: 'calc(50% - 18px)',
          },
        }),

        [`.${projectCardClassNames.coverImage}`]: {
          objectFit: 'cover',

          ...responsive({
            default: {
              display: 'none',
            },
            tablet: {
              display: 'block',
              height: 200,
            },
            desktop: {
              height: 250,
            },
            largeDesktop: {
              height: 450,
            },
          }),
        },

        [`.${projectCardClassNames.technologies}`]: {
          ...responsive({
            default: {
              display: 'none',
            },
            tablet: {
              display: 'block',
            },
          }),
        },

        [`&.${classNames.nextProjectButton}`]: {
          marginLeft: 'auto',
          textAlign: 'right',
        },
      },
    },
  },
}));

export default {
  ProjectPage,
};
