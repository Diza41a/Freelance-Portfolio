import type { JSX } from 'react';
import LandingPage from './pages/Landing';

export type RouteFixture = {
  path: string;
  element: JSX.Element;
};

export const ROUTES: RouteFixture[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
];
