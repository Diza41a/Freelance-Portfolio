import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import Hamburger from 'hamburger-react';
import S, { classNames } from './styles';
import ThemeToggle from '../ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contacts', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isBurgerExpanded, setIsBurgerExpanded] = useState(false);

  const isOnTopOfPage = window.scrollY === 0;
  const shouldApplyOpaqueBackground = isOnTopOfPage && !isBurgerExpanded;
  const headerClassNames = [];
  if (shouldApplyOpaqueBackground) headerClassNames.push(classNames.opaqueBackground);

  const navMenuClassNames = [];
  if (isBurgerExpanded) navMenuClassNames.push(classNames.navMenuExpanded);
  const NavMenu = (
    <nav className={navMenuClassNames.join(' ')}>
      <ul>
        {NAV_LINKS.map(({ name, path }) => (
          <li key={name}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>

      <Hamburger
        direction="left"
        size={24}
        toggled={isBurgerExpanded}
        toggle={setIsBurgerExpanded}
      />
    </nav>
  );
  const LogoLink = (
    <NavLink to="/" className={classNames.logoLink}>
      WIP
    </NavLink>
  );

  useLayoutEffect(() => {
    const visibleHeaderY = 500;
    let lastScrollY = window.scrollY;
    const toggleHeaderVisibilityOnScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isScrollingUp || currentScrollY <= visibleHeaderY) {
        headerRef.current?.classList.remove(classNames.hidden);
      } else {
        if (!isBurgerExpanded) headerRef.current?.classList.add(classNames.hidden);
      }

      lastScrollY = currentScrollY;
    };
    const toggleHeaderStylesOnScroll = () => {
      if (!headerRef.current) return;

      if ((window.scrollY > 0 && !isBurgerExpanded) || isBurgerExpanded) {
        headerRef.current.classList.remove(classNames.opaqueBackground);
      } else {
        headerRef.current.classList.add(classNames.opaqueBackground);
      }
    };
    const toggleBurgerMenuOnPageResize = () => {
      if (window.innerWidth > 750) {
        setIsBurgerExpanded(false);
      }
    };
    const toggleBurgerMenuOnExternalClick = (e: MouseEvent | TouchEvent) => {
      if (!headerRef.current) return;

      const clickedEl = e.target as HTMLElement;
      if (!headerRef.current.contains(clickedEl)) setIsBurgerExpanded(false);
    };

    toggleHeaderStylesOnScroll();
    window.addEventListener('scroll', toggleHeaderVisibilityOnScroll);
    window.addEventListener('scroll', toggleHeaderStylesOnScroll);
    window.addEventListener('resize', toggleBurgerMenuOnPageResize);
    window.addEventListener('click', toggleBurgerMenuOnExternalClick);

    return () => {
      window.removeEventListener('scroll', toggleHeaderVisibilityOnScroll);
      window.removeEventListener('scroll', toggleHeaderStylesOnScroll);
      window.removeEventListener('resize', toggleBurgerMenuOnPageResize);
      window.removeEventListener('click', toggleBurgerMenuOnExternalClick);
    };
  }, [isBurgerExpanded]);

  useLayoutEffect(() => {
    setIsBurgerExpanded(false);
  }, [location.pathname]);

  return (
    <S.Header ref={headerRef} className={headerClassNames.join(' ')}>
      {LogoLink}
      <div className={classNames.navMenuContainer}>
        <ThemeToggle />
        {NavMenu}
      </div>
    </S.Header>
  );
};

export default Header;
