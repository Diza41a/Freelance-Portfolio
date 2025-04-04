import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router';
import { useGlobalContext } from '../contexts/globalContext';

export const useVisitedGSAP = (animation: () => void, deps: React.DependencyList = []) => {
  const { visitedPagesRef } = useGlobalContext();
  const location = useLocation();
  const key = location.pathname;

  useGSAP(() => {
    if (visitedPagesRef.current.has(key)) return;

    requestAnimationFrame(() => {
      const ctx = gsap.context(animation);
      visitedPagesRef.current.set(key, true);

      return () => ctx.revert();
    });
  }, [key, ...deps]);
};
