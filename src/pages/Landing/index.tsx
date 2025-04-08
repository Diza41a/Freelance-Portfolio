import S, { classNames } from './styles';
import type { JSX } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ReachOutSection from './ReachOutSection';

const LandingPage = (): JSX.Element => {
  return (
    <S.LandingPage className={classNames.root}>
      <HeroSection />
      <ServicesSection />
      <ReachOutSection />
    </S.LandingPage>
  );
};

export default LandingPage;
