import { Typography } from '@mui/material';
import S, { classNames } from './styles';
import {
  Computer as ComputerIcon,
  SearchCheck as SEOIcon,
  ChartLine as MaintenanceIcon,
  Puzzle as MoreComingSoonIcon,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { createServicesSectionTimeline } from './utils';

const SERVICES = [
  {
    title: 'Full Stack Web Development',
    description: 'I build responsive and user-friendly web applications using modern technologies.',
    icon: <ComputerIcon />,
  },
  {
    title: 'SEO Optimization',
    description: 'I optimize websites for search engines to improve visibility and ranking.',
    icon: <SEOIcon />,
  },
  {
    title: 'Web Application Maintenance',
    description:
      'I provide ongoing support and maintenance for web applications to ensure optimal performance.',
    icon: <MaintenanceIcon />,
  },
  {
    title: 'More Coming Soon...',
    description: 'Stay tuned for more exciting services in the future!',
    icon: <MoreComingSoonIcon />,
  },
];

const ServicesSection = () => {
  useGSAP(() => {
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
