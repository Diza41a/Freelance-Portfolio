type BreadcrumbLink = {
  label: string;
  path: string;
};

export interface TitleBoxProps {
  title: string;
  breadcrumbLinks: BreadcrumbLink[];
  description?: string;
}
