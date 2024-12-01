import SvgCertification from "../assets/svg/SvgCertification";
import SvgFacebook from "../assets/svg/SvgFacebook";
import SvgHumanResources from "../assets/svg/SvgHumanResources";
import SvgInstagram from "../assets/svg/SvgInstagram";
import SvgLargeScale from "../assets/svg/SvgLargeScale";
import SvgLinkedIn from "../assets/svg/SvgLinkedIn";
import SvgStyle from "../assets/svg/SvgStyle";
import SvgTech from "../assets/svg/SvgTech";
import SvgTiktok from "../assets/svg/SvgTiktok";
import SvgTime from "../assets/svg/SvgTime";
import SvgYoutube from "../assets/svg/SvgYoutube";
import SvgZalo from "../assets/svg/SvgZalo";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { PiInvoiceDuotone } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";

import {
  CertificateItemType,
  NavItemType,
  ServiceItemType,
  SidebarItemType,
  SliderItemType,
  SocialMediaItemType,
} from "../type/common";

export const MENU_HEADER: NavItemType[] = [
  {
    href: "",
    label: "Introduction",
  },
  {
    href: "",
    label: "Cosmetic Services",
  },
  {
    href: "",
    label: "Beauty Knowledge",
  },
  {
    href: "",
    label: "News & Events",
  },
];

export const SERVICE: ServiceItemType[] = [
  {
    image: "/images/phun-moi.jpg",
    service: "Lip tattooing service",
    href: "",
  },
  {
    image: "/images/phun-may.webp",
    service: "Eyebrow tattooing service",
    href: "",
  },
  {
    image: "/images/phun-mi-mat.jpg",
    service: "Eyeliner tattooing service",
    href: "",
  },
  {
    image: "/images/phun-moi.jpg",
    service: "Lip tattooing service",
    href: "",
  },
  {
    image: "/images/phun-may.webp",
    service: "Eyebrow tattooing service",
    href: "",
  },
  {
    image: "/images/phun-mi-mat.jpg",
    service: "Eyeliner tattooing service",
    href: "",
  },
];

export const SLIDERS: SliderItemType[] = [
  {
    href: "/images/banner-top-cong-nghe-pc.webp",
    name: "banner-top-cong-nghe-pc",
  },
  {
    href: "/images/banner-599-pc.webp",
    name: "banner-599-pc",
  },
  {
    href: "/images/10.09_BANNER-PR-DOI-NGU-BAC-SI-VTM-DIVA-02.webp",
    name: "10.09_BANNER-PR-DOI-NGU-BAC-SI-VTM-DIVA-02",
  },
  {
    href: "/images/Desktop.jpg",
    name: "Desktop",
  },
  {
    href: "/images/PosterTreo.jpg",
    name: "PosterTreo",
  },
];

export const CERTIFICATES: CertificateItemType[] = [
  {
    icon: SvgLargeScale,
    title: "Large scale",
    content:
      "A reputable chain of aesthetic clinics with multiple branches nationwide.",
  },
  {
    icon: SvgCertification,
    title: "Reputable certification",
    content:
      "Building trust through a team of skilled, experienced specialists and doctors.",
  },
  {
    icon: SvgTech,
    title: "Advanced technology",
    content:
      "Continuously updating with advanced technology and premium skincare products in treatments.",
  },
  {
    icon: SvgStyle,
    title: "Professional style",
    content:
      "With the mission of 'serving from the heart,' always prioritizing customer satisfaction as the goal for development.",
  },
  {
    icon: SvgHumanResources,
    title: "Expert team",
    content:
      "The team consists of leading doctors and aesthetic specialists, along with hundreds of professionally trained technicians.",
  },
  {
    icon: SvgTime,
    title: "Flexible hours",
    content:
      "Operating continuously from Monday to Sunday, from 8:00 AM to 7:00 PM.",
  },
];

export const SOCIAL_MEDIA: SocialMediaItemType[] = [
  {
    icon: SvgFacebook,
    link: "https://www.facebook.com/media/set/?vanity=munsocola.super&set=a.3093229067479357",
  },
  {
    icon: SvgZalo,
    link: "",
  },
  {
    icon: SvgTiktok,
    link: "",
  },
  {
    icon: SvgInstagram,
    link: "",
  },
  {
    icon: SvgYoutube,
    link: "",
  },
  {
    icon: SvgLinkedIn,
    link: "",
  },
];

export const IMAGES: SliderItemType[] = [
  {
    href: "/images/service1.jpg",
    name: "service1",
  },
  {
    href: "/images/ad1.jpg",
    name: "ad1",
  },
  {
    href: "/images/ad2.jpg",
    name: "ad2",
  },
  {
    href: "/images/ad3.jpg",
    name: "ad2",
  },
  {
    href: "/images/ad4.jpg",
    name: "ad4",
  },
  {
    href: "/images/service2.jpg",
    name: "service2",
  },
  {
    href: "/images/ad5.jpg",
    name: "ad5",
  },
  {
    href: "/images/ad6.jpg",
    name: "ad6",
  },
  {
    href: "/images/ad7.jpg",
    name: "ad7",
  },
  {
    href: "/images/ad8.jpg",
    name: "ad8",
  },
  {
    href: "/images/ad9.jpg",
    name: "ad9",
  },
  {
    href: "/images/ad10.jpg",
    name: "ad10",
  },
  {
    href: "/images/ad11.jpg",
    name: "ad11",
  },
  {
    href: "/images/ad12.jpg",
    name: "ad12",
  },
  {
    href: "/images/ad13.jpg",
    name: "ad13",
  },
];

export const SIDE_BAR: SidebarItemType[] = [
  {
    label: "Dashboard",
    pathname: "/admin",
    icon: LuLayoutDashboard,
    disabled: false,
  },
  {
    label: "Schedule",
    pathname: "/admin/schedule",
    icon: AiOutlineSchedule,
    disabled: false,
  },
  {
    label: "Invoice",
    pathname: "/admin/invoice",
    icon: PiInvoiceDuotone,
    disabled: false,
  },
  {
    label: "Customer",
    pathname: "/admin/customer",
    icon: VscAccount,
    disabled: true,
  },
  {
    label: "Setting",
    pathname: "/admin/setting",
    icon: IoSettingsOutline,
    disabled: true,
  },
];
