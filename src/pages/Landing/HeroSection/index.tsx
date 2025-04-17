import { Divider, Typography } from '@mui/material';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { createHeroSectionTimeline } from './utils';
import S, { classNames } from './styles';
import RobotHandTabletOnImage from '../../../assets/images/RobotHandOnTablet.png';
import ProfilePhoto from '../../../assets/images/ProfilePhoto.jpeg';
import ResumePdf from '../../../assets/docs/Resume.pdf';
import RunningLine from './RunningLine';
import { NavLink } from 'react-router';
import { useVisitedGSAP } from '../../../hooks/useVisitedGSAP';

const HeroSection = () => {
  useVisitedGSAP(() => {
    createHeroSectionTimeline();
  });

  return (
    <S.HeroSection className={classNames.root}>
      <div className={classNames.titleContainer}>
        <Typography variant="h1" component="h1">
          Transforming ideas into
          <br /> friendly and dynamic
          <br /> web solutions
        </Typography>
      </div>
      <div className={classNames.bodyContainer}>
        <div className={classNames.bodyContainerImageContainer}>
          <img src={RobotHandTabletOnImage} alt="" draggable={false} />
          <div>
            <img src={ProfilePhoto} alt="" />
          </div>
        </div>
        <div className={classNames.bodyContainerContent}>
          <Typography className={classNames.bodyContainerText}>
            I develop full-stack web solutions that are fast, responsive, and easy to manage — built
            to support your business.
          </Typography>
          <div className={classNames.bodyContainerActionButtons}>
            <NavLink to="/projects">
              <Button padding={'20px 18px'} borderRadius={35}>
                Discover my work
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button padding={'20px 18px'} borderRadius={35} styleVariant="secondary">
                Hire me
              </Button>
            </NavLink>
          </div>
          <div className={classNames.bodyContainerLinks}>
            <Link
              href="https://www.linkedin.com/in/davydzakorchennyi/"
              target="_blank"
              showLinkIcon
            >
              LinkedIn
            </Link>
            <Link href={ResumePdf} target="_blank">
              View Resume
            </Link>
          </div>
        </div>
      </div>
      <Divider />
      <RunningLine />
    </S.HeroSection>
  );
};

export default HeroSection;
