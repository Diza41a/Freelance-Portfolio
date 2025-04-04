import { useGSAP } from '@gsap/react';
import TitleBox from '../../components/TitleBox';
import ProjectsGrid from './ProjectsGrid';
import { generateProjectsPageTimeline } from './utils';
import S, { classNames } from './styles';

const ProjectsPage = () => {
  const titleBoxDescription =
    'Each case study demonstrates our commitment to creating innovative, user-centric solutions that drive results for our clients.';
  const titleBoxBreadcrumbLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ];

  useGSAP(() => {
    generateProjectsPageTimeline();
  }, []);

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
