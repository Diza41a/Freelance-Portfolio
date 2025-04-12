import { useLayoutEffect } from 'react';
import { classNames as topCornerBackgroundImageClassNames } from '../../components/TopCornerBackgroundImage';
import S, { classNames } from './styles';
import { PROJECTS } from '../../data/projects';
import { formatStringToUriPath } from '../../utils/apiUtils';
import { Navigate, useLocation } from 'react-router';
import { Breadcrumbs, Divider, Typography, useTheme } from '@mui/material';
import BreadcrumbLink from '../../components/BreadcrumbLink';
import Button from '../../components/Button';
import ProjectCard from '../../components/ProjectCard';
import { generateProjectPageTweens, renderMedia } from './utils';
import { useVisitedGSAP } from '../../hooks/useVisitedGSAP';

const ProjectPage = () => {
  const theme = useTheme();

  const projectNameFromUriPath = useLocation().pathname.split('/').pop();
  const projectI = PROJECTS.findIndex(
    ({ title: projectTitle }) => formatStringToUriPath(projectTitle) === projectNameFromUriPath,
  );
  if (projectI < 0) return <Navigate to="/projects" />;

  const project = PROJECTS[projectI];
  const prevProject = projectI > 0 ? PROJECTS[projectI - 1] : null;
  const nextProject = projectI < PROJECTS.length - 1 ? PROJECTS[projectI + 1] : null;

  const breadcrumbLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ];
  const TitleBox = (
    <section className={classNames.titleBox}>
      <img src={project.media.cover.source} alt={`A cover of ${project.title}`} draggable="false" />
      <div className={classNames.titleBoxTextContainer}>
        <Typography variant="h2">{project.title}</Typography>
        <Breadcrumbs className={classNames.breadcrumbs}>
          {breadcrumbLinks.map(({ label, path }) => (
            <BreadcrumbLink key={label} path={path}>
              {label}
            </BreadcrumbLink>
          ))}
        </Breadcrumbs>
      </div>
    </section>
  );
  const MetaData = (
    <div className={classNames.metaContainer}>
      <Typography variant="h4">Project Overview</Typography>
      <Typography variant="h5">Services Provided</Typography>
      <ul>
        {project.servicesProvided.map((service) => (
          <li key={service}>
            <Typography variant="body3">{service}</Typography>
          </li>
        ))}
      </ul>
      <Divider />
      <Typography variant="h5">Technologies Used</Typography>
      <Typography variant="body2" className={classNames.technologies}>
        {project.technologies.join(', ')}
      </Typography>
      {project.links &&
        project.links.map((link) => (
          <Button
            component="a"
            href={link.path}
            target="_blank"
            key={link.label}
            padding="16px 8px"
            borderRadius={35}
          >
            {link.label}
          </Button>
        ))}
    </div>
  );
  const Description = (
    <div className={classNames.descriptionContainer}>
      <Typography variant="h3">{project.typeTitle}</Typography>
      <Typography variant="body2" className={classNames.descriptionBody}>
        {project.description}
      </Typography>
    </div>
  );
  const ChallengeBlock = (
    <div className={classNames.detailsBlock}>
      <Typography variant="h4">Challenge</Typography>
      <div>
        <ul>
          {project.challenges.map((challenge) => (
            <li key={challenge}>
              <Typography variant="body2">{challenge}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  const SolutionBlock = (
    <div className={classNames.detailsBlock}>
      <Typography variant="h4">Solution</Typography>
      <div>
        <ul>
          {project.solutions.map((solution) => (
            <li key={solution}>
              <Typography variant="body2" component="span">
                {solution}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  const FeedbackBlock = project.feedback && (
    <div className={classNames.detailsBlock}>
      <Typography variant="h4">User Feedback</Typography>
      <div className={classNames.feedbackContainer}>
        <Typography variant="body2" className={classNames.feedbackText}>
          {project.feedback.review}
        </Typography>
        {(() => {
          const [firstName, lastName] = project.feedback.name.split(' ');
          const formattedName = `${firstName} ${lastName[0]}`;

          return (
            <Typography variant="body3" className={classNames.feedbackAuthor}>
              <span
                style={{
                  fontFamily: theme.fonts.main,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                {`${formattedName}, `}
              </span>
              {project.feedback.position}
            </Typography>
          );
        })()}
      </div>
    </div>
  );
  const NavButtons = (() => {
    const NavLinkButtons = [];
    if (prevProject) {
      NavLinkButtons.push(
        <ProjectCard
          key={prevProject.title}
          title={prevProject.title}
          subtitle={prevProject.typeTitle}
          coverImagePath={prevProject.media.cover.source}
          technologies={prevProject.technologies}
          className={classNames.prevProjectButton}
        />,
      );
    }
    if (nextProject) {
      NavLinkButtons.push(
        <ProjectCard
          key={nextProject.title}
          title={nextProject.title}
          subtitle={nextProject.typeTitle}
          coverImagePath={nextProject.media.cover.source}
          technologies={nextProject.technologies}
          className={classNames.nextProjectButton}
        />,
      );
    }
    return (
      <div className={classNames.navButtonsContainer}>
        <Typography variant="h3">{"What's next?"}</Typography>
        <div className={classNames.navButtons}>{NavLinkButtons}</div>
      </div>
    );
  })();

  useLayoutEffect(() => {
    const topCornerBackgroundImageEl = document.querySelector<HTMLDivElement>(
      `.${topCornerBackgroundImageClassNames.root}`,
    );
    if (!topCornerBackgroundImageEl) return;

    topCornerBackgroundImageEl.style.display = 'none';

    return () => {
      topCornerBackgroundImageEl.style.display = 'block';
    };
  }, []);

  useVisitedGSAP(() => {
    generateProjectPageTweens();
  });

  return (
    <S.ProjectPage>
      {TitleBox}
      <div className={classNames.body}>
        <div className={classNames.overviewContainer}>
          {MetaData}
          {Description}
        </div>
        {renderMedia(project.media.media1)}
        {ChallengeBlock}
        <Divider />
        {SolutionBlock}
        {renderMedia(project.media.media2)}
        {FeedbackBlock}
      </div>
      {NavButtons}
    </S.ProjectPage>
  );
};

export default ProjectPage;
