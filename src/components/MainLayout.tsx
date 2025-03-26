import { Outlet } from 'react-router';
import type { JSX } from 'react';

const MainLayout = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
