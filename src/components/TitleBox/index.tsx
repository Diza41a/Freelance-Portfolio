import S, { classNames } from './styles';
import type { TitleBoxProps } from './props';
import { Breadcrumbs, Typography } from '@mui/material';

const TitleBox = (props: TitleBoxProps) => {
  const { title, description, breadcrumbLinks = [] } = props;

  return (
    <S.TitleBoxContainer>
      <div className={classNames.descriptionContainer}>
        <Typography variant="h2">{title}</Typography>
        <Breadcrumbs />
      </div>
      {description && <Typography variant="body2" />}
    </S.TitleBoxContainer>
  );
};

export default TitleBox;
