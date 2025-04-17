import { Outlet } from 'react-router';
import type { JSX } from 'react';
import { styled } from '@mui/material';
import Header from './Header';
import { HEADER_HEIGHT, HEADER_HEIGHT_DESKTOP } from './Header/styles';
import TopCornerBackgroundImage from './TopCornerBackgroundImage';
import { Z_INDEXES } from '../assets/themes/constants';
import Footer from './Footer';

const OutletWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  overflowX: 'hidden',
  backgroundColor: theme.colors.surface.primary[100],

  '>div, >section': {
    paddingTop: HEADER_HEIGHT,
  },

  [`${theme.breakpoints.up('desktop')}`]: {
    '>div, >section': {
      paddingTop: HEADER_HEIGHT_DESKTOP,
    },
  },

  '*': {
    zIndex: Z_INDEXES.default,
  },
}));

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
        <TopCornerBackgroundImage />
      </OutletWrapper>
      <Footer />
    </>
  );
};

export default MainLayout;
