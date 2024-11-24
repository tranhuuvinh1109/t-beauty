import { SVGProps } from "react";
import { IconType } from "react-icons";

export type SubMenuItemType = {
  href: string;
  label: string;
};

export type NavItemType = {
  href: string;
  label: string;
  submenu?: SubMenuItemType[];
};

export type ServiceItemType = {
  image: string;
  service: string;
  href: string;
};

export type SliderItemType = {
  href: string;
  name: string;
};

export type CertificateItemType = {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
};

export type SocialMediaItemType = {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
};

export type SidebarItemType = {
  pathname: string;
  label: string;
  icon: IconType;
};
