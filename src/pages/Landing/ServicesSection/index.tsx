import { Typography } from '@mui/material';
import S, { classNames } from './styles';
import {
  Computer as ComputerIcon,
  SearchCheck as SEOIcon,
  ChartLine as MaintenanceIcon,
  Puzzle as MoreComingSoonIcon,
} from 'lucide-react';
import { createServicesSectionTimeline } from './utils';
import { useVisitedGSAP } from '../../../hooks/useVisitedGSAP';

const SERVICES = [
  {
    title: 'Full Stack Web Development',
    description:
      'I build responsive, user-friendly websites and web apps using modern tools like React and Nest.js.',
    icon: <ComputerIcon />,
  },
  {
    title: 'SEO Optimization',
    description:
      "I improve your platform's visibility on search engines to help more people find your website online.",
    icon: <SEOIcon />,
  },
  {
    title: 'Web Application Maintenance',
    description:
      'I provide support and maintenance for web applications to keep your website running smoothly.',
    icon: <MaintenanceIcon />,
  },
  {
    title: 'More Coming Soon...',
    description: "Stay tuned — more services to support your platform's growth are on the way!",
    icon: <MoreComingSoonIcon />,
  },
];

const ServicesSection = () => {
  useVisitedGSAP(() => {
    createServicesSectionTimeline();
  });

  return (
    <S.ServicesSection className={classNames.root}>
      <Typography variant="h2" className={classNames.title}>
        Services I Provide
      </Typography>
      <div className={classNames.servicesContainer}>
        {SERVICES.map((service, index) => (
          <div key={index} className={classNames.serviceCard}>
            <div className={classNames.serviceCardIcon}>{service.icon}</div>
            <div className={classNames.serviceCardTextContainer}>
              <Typography variant="h5">{service.title}</Typography>
              <Typography variant="body1">{service.description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </S.ServicesSection>
  );
};

export default ServicesSection;
