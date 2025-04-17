import { Typography } from '@mui/material';
import S, { classNames } from './styles';
import { NavLink } from 'react-router';
import { Button as MuiButton } from '@mui/material';
import { Linkedin as LinkedinIcon, MoveUp as ArrowUpIcon } from 'lucide-react';
import FooterBackgroundImage from './FooterBackgroundImage';

const Footer = () => {
  const applyIsNavLinkActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? classNames.navLinkActive : '';

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Footer className={classNames.root}>
      <div className={classNames.mainSectionsContainer}>
        <nav>
          <Typography variant="body1" className={classNames.sectionTitle}>
            Navigation
          </Typography>
          <ul>
            <li>
              <NavLink to="/" className={applyIsNavLinkActiveClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={applyIsNavLinkActiveClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={applyIsNavLinkActiveClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classNames.socialMedia}>
          <Typography variant="body1" className={classNames.sectionTitle}>
            Social Media
          </Typography>
          <MuiButton
            component="a"
            href="https://www.linkedin.com/in/davydzakorchennyi/"
            target="_blank"
            startIcon={<LinkedinIcon />}
            variant="outlined"
            disableElevation
            disableRipple
          >
            LinkedIn
          </MuiButton>
        </div>
      </div>

      <div className={classNames.buttonBackToTopContainer}>
        <MuiButton
          onClick={handleBackToTopClick}
          variant="outlined"
          endIcon={<ArrowUpIcon />}
          disableElevation
          disableRipple
        >
          Back to Top
        </MuiButton>
      </div>

      <FooterBackgroundImage />
    </S.Footer>
  );
};

export default Footer;
