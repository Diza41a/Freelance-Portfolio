import type { JSX } from 'react';
import LandingPage from './pages/Landing';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import ContactPage from './pages/Contact';

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
  {
    path: '/projects/:projectName',
    element: <ProjectPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];
