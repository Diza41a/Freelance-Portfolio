import { Typography } from '@mui/material';
import OutlinedImage from '../OutlinedImage';
import { classNames, S } from './styles';
import { formatStringToUriPath } from '../../utils/apiUtils';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  technologies: string[];
  coverImagePath: string;
  className?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, subtitle, technologies, coverImagePath, className = '' } = props;
  const uriPath = formatStringToUriPath(title);

  return (
    <S.ProjectCard className={`${classNames.root} ${className}`} to={`/projects/${uriPath}`}>
      <OutlinedImage
        src={coverImagePath}
        alt={`A cover image of ${title}`}
        className={classNames.coverImage}
        draggable="false"
      />
      <Typography variant="h4" className={classNames.title}>
        {title}
      </Typography>
      <Typography variant="body2" className={classNames.subtitle}>
        {subtitle}
      </Typography>
      <Typography variant="body3" className={classNames.technologies}>
        <span>Technologies:</span> {technologies.join(', ')}
      </Typography>
    </S.ProjectCard>
  );
};

export default ProjectCard;
