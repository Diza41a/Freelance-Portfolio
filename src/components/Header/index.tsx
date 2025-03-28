import { useLayoutEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import S, { classNames } from './styles';
import { NavLink } from 'react-router';

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isBurgerExpanded, setIsBurgerExpanded] = useState(false);

  const navMenuClassNames = [];
  if (isBurgerExpanded) navMenuClassNames.push(classNames.navMenuExpanded);
  const NavMenu = (
    <nav className={navMenuClassNames.join(' ')}>
      <ul>
        {['Home', 'About', 'Services', 'Projects', 'Contacts'].map((item) => (
          <li key={item}>
            <a href={`/${item.toLowerCase()}`}>{item}</a>
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
      Dayzik
    </NavLink>
  );

  useLayoutEffect(() => {
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

    window.addEventListener('resize', toggleBurgerMenuOnPageResize);
    window.addEventListener('click', toggleBurgerMenuOnExternalClick);

    return () => {
      window.removeEventListener('resize', toggleBurgerMenuOnPageResize);
      window.removeEventListener('click', toggleBurgerMenuOnExternalClick);
    };
  }, []);

  return (
    <S.Header ref={headerRef}>
      {LogoLink}
      {NavMenu}
    </S.Header>
  );
};

export default Header;
