import S, { classNames } from './styles';
import type { JSX } from 'react';
import HeroSection from './HeroSection';
import TopCornerBackgroundImage from '../../components/TopCornerBackgroundImage';

const LandingPage = (): JSX.Element => {
  return (
    <S.LandingPage className={classNames.root}>
      <HeroSection />
      <div
        style={{ height: '100vh', position: 'relative', zIndex: 10, backgroundColor: 'black' }}
      />

      <TopCornerBackgroundImage />
    </S.LandingPage>
  );
};

export default LandingPage;
