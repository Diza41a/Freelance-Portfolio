import TitleBox from '../../components/TitleBox';
import ProjectsGrid from './ProjectsGrid';
import { generateProjectsPageTimeline } from './utils';
import S, { classNames } from './styles';
import { useVisitedGSAP } from '../../hooks/useVisitedGSAP';

const ProjectsPage = () => {
  const titleBoxDescription =
    'These examples demonstrate how I approach web development with a focus on your goals, usability, and results.';
  const titleBoxBreadcrumbLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ];

  useVisitedGSAP(() => {
    generateProjectsPageTimeline();
  });

  return (
    <S.ProjectsPage className={classNames.root}>
      <TitleBox
        title="Featured Projects"
        description={titleBoxDescription}
        breadcrumbLinks={titleBoxBreadcrumbLinks}
      />
      <ProjectsGrid />
    </S.ProjectsPage>
  );
};

export default ProjectsPage;
