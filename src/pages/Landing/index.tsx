import { Typography } from '@mui/material';
import TopCornerBackgroundImage from '../../components/TopCornerBackgroundImage';
import S, { classNames } from './styles';
import type { JSX } from 'react';
import Button from '../../components/Button';
import Link from '../../components/Link';
import ResumePdf from '../../assets/docs/Resume.pdf';

const LandingPage = (): JSX.Element => {
  return (
    <S.LandingPage>
      <div className={classNames.titleContainer}>
        <Typography variant="h1" component="h1">
          Transforming ideas into
          <br /> exceptional digital
          <br /> products
        </Typography>
      </div>
      <div className={classNames.bodyContainer}>
        <Typography className={classNames.bodyContainerText}>
          Creating innovative, user-centric designs that drive business success and deliver
          outstanding user experiences across all digital platforms.
        </Typography>
        <div className={classNames.bodyContainerActionButtons}>
          <Button padding={'20px 18px'} borderRadius={35}>
            Discover my work
          </Button>
          <Button padding={'20px 18px'} borderRadius={35} styleVariant="secondary">
            Hire me
          </Button>
        </div>
        <div className={classNames.bodyContainerLinks}>
          <Link href="https://www.linkedin.com/in/davydzakorchennyi/" target="_blank" showLinkIcon>
            LinkedIn
          </Link>
          <Link href="https://github.com/diza41a" target="_blank" showLinkIcon>
            GitHub
          </Link>
          <Link href={ResumePdf} style={{ marginLeft: 'auto' }} target="_blank">
            View Resume
          </Link>
        </div>
      </div>

      <TopCornerBackgroundImage />
    </S.LandingPage>
  );
};

export default LandingPage;
