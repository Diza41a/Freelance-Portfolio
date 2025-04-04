import { Breadcrumbs, Typography } from '@mui/material';
import S, { classNames } from './styles';
import type { TitleBoxProps } from './props';
import BreadcrumbLink from '../BreadcrumbLink';

const TitleBox = (props: TitleBoxProps) => {
  const { title, description, breadcrumbLinks = [] } = props;
  const hasDescription = !!description;
  const LinkBreadcrumbs =
    breadcrumbLinks.length > 1
      ? breadcrumbLinks.slice(0, -1).map(({ label, path }) => (
          <BreadcrumbLink key={label} path={path}>
            {label}
          </BreadcrumbLink>
        ))
      : null;
  const lastBreadcrumbLink = breadcrumbLinks.slice(-1)[0];
  const LastBreadcrumb = <Typography>{lastBreadcrumbLink.label}</Typography>;

  return (
    <S.TitleBoxContainer hasDescription={hasDescription} className={classNames.root}>
      <div className={classNames.titleContainer}>
        <Typography variant="h2">{title}</Typography>
        <Breadcrumbs className={classNames.breadcrumbs}>
          {LinkBreadcrumbs}
          {LastBreadcrumb}
        </Breadcrumbs>
      </div>
      {description && (
        <Typography variant="body2" className={classNames.description}>
          {description}
        </Typography>
      )}
    </S.TitleBoxContainer>
  );
};

export default TitleBox;
