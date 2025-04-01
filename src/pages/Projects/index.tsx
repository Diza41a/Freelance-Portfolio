import TitleBox from '../../components/TitleBox';
import S from './styles';

const ProjectsPage = () => {
  const titleBoxDescription =
    'Each case study demonstrates our commitment to creating innovative, user-centric solutions that drive results for our clients.';
  const titleBoxBreadcrumbLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <S.ProjectsPage>
      <TitleBox
        title="Featured Projects"
        description={titleBoxDescription}
        breadcrumbLinks={titleBoxBreadcrumbLinks}
      />
      lol
    </S.ProjectsPage>
  );
};

export default ProjectsPage;
