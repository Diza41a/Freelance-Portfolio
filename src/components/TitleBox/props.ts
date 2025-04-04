type BreadcrumbLinkData = {
  label: string;
  path: string;
};

export interface TitleBoxProps {
  title: string;
  breadcrumbLinks: BreadcrumbLinkData[];
  description?: string;
}
