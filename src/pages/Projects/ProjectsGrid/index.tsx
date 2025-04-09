import { PROJECTS } from '../../../data/projects';
import ProjectCard from '../../../components/ProjectCard';
import S from './styles';

const ProjectsGrid = () => {
  return (
    <S.ProjectsGridContainer>
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          technologies={project.technologies}
          coverImagePath={project.media.cover.source}
        />
      ))}
    </S.ProjectsGridContainer>
  );
};

export default ProjectsGrid;
