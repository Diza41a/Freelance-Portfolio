import type { JSX } from 'react';
import LandingPage from './pages/Landing';
import ProjectsPage from './pages/Projects';

export type RouteFixture = {
  path: string;
  element: JSX.Element;
};

export const ROUTES: RouteFixture[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
];
