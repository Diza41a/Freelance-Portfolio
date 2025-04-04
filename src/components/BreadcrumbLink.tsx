import { Link as MuiLink } from '@mui/material';
import type { LinkProps as MuiLinkProps } from '@mui/material';
import { NavLink } from 'react-router';

export interface BreadcrumbLinkProps extends MuiLinkProps {
  path: string;
}

const BreadcrumbLink = ({ path, ...rest }: BreadcrumbLinkProps) => (
  <MuiLink component={NavLink} underline="none" to={path} {...rest} />
);

export default BreadcrumbLink;
