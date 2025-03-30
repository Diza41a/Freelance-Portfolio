import S, { classNames } from './styles';
import type { JSX } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import TopCornerBackgroundImage from '../../components/TopCornerBackgroundImage';

const LandingPage = (): JSX.Element => {
  return (
    <S.LandingPage className={classNames.root}>
      <HeroSection />
      <ServicesSection />
      <TopCornerBackgroundImage />
    </S.LandingPage>
  );
};

export default LandingPage;
