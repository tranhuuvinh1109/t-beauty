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
import {
  CertificateItemType,
  NavItemType,
  ServiceItemType,
  SliderItemType,
  SocialMediaItemType,
} from "../type/common";

export const MENU_HEADER: NavItemType[] = [
  {
    href: "",
    label: "Introduction",
    submenu: [
      {
        href: "admin",
        label: "Medical Team",
      },
      {
        href: "",
        label: "Facilities",
      },
      {
        href: "",
        label: " Chain of Facilities",
      },
    ],
  },
  {
    href: "",
    label: "Cosmetic Services",
    submenu: [
      {
        href: "",
        label: "Medical Team",
      },
      {
        href: "",
        label: "Facilities",
      },
      {
        href: "",
        label: " Chain of Facilities",
      },
    ],
  },
  {
    href: "",
    label: "Beauty Knowledge",
    submenu: [
      {
        href: "",
        label: "Medical Team",
      },
      {
        href: "",
        label: "Facilities",
      },
      {
        href: "",
        label: " Chain of Facilities",
      },
    ],
  },
  {
    href: "",
    label: "News & Events",
    submenu: [
      {
        href: "",
        label: "Medical Team",
      },
      {
        href: "",
        label: "Facilities",
      },
      {
        href: "",
        label: " Chain of Facilities",
      },
    ],
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
    link: "",
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
    href: "/images/Mobile.jpg",
    name: "Mobile",
  },
  {
    href: "/images/Mobile.jpg",
    name: "Mobile",
  },
  {
    href: "/images/Mobile.jpg",
    name: "Mobile",
  },
  {
    href: "/images/Mobile.jpg",
    name: "Mobile",
  },
  {
    href: "/images/Mobile.jpg",
    name: "Mobile",
  },
];
