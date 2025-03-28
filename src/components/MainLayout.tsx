import { Outlet } from 'react-router';
import type { JSX } from 'react';
import Header from './Header';

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
