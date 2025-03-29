import { Typography } from '@mui/material';
import { useGSAP } from '@gsap/react';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { createHeroSectionTimeline } from './utils';
import S, { classNames } from './styles';
import RobotHandTabletOnImage from '../../../assets/images/RobotHandOnTablet.png';
import ProfilePhoto from '../../../assets/images/ProfilePhoto.jpeg';
import ResumePdf from '../../../assets/docs/Resume.pdf';

const HeroSection = () => {
  useGSAP(() => {
    createHeroSectionTimeline();
  });

  return (
    <S.HeroSection className={classNames.root}>
      <div className={classNames.titleContainer}>
        <Typography variant="h1" component="h1">
          Transforming ideas into
          <br /> exceptional digital
          <br /> products
        </Typography>
      </div>
      <div className={classNames.bodyContainer}>
        <div className={classNames.bodyContainerImageContainer}>
          <img src={RobotHandTabletOnImage} alt="" />
          <div>
            <img src={ProfilePhoto} alt="" />
          </div>
        </div>
        <div className={classNames.bodyContainerContent}>
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
            <Link
              href="https://www.linkedin.com/in/davydzakorchennyi/"
              target="_blank"
              showLinkIcon
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/diza41a" target="_blank" showLinkIcon>
              GitHub
            </Link>
            <Link href={ResumePdf} target="_blank">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </S.HeroSection>
  );
};

export default HeroSection;
