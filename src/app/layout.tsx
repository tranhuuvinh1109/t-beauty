import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Dancing_Script, Barlow } from "next/font/google";
import QueryProvider from "./provider/QueryProvider";

const Bar = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bar",
});

const Dancing = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "T Beauty Center",
  description:
    "Experience premium beauty and wellness services at T Beauty Center. Our expert team specializes in skincare, cosmetic treatments, and rejuvenation for a radiant you.",
  keywords: [
    "T Beauty Center",
    "aesthetic clinic",
    "beauty center",
    "cosmetic treatments",
    "skincare services",
    "facial rejuvenation",
    "anti-aging treatments",
    "professional beauty care",
    "luxury beauty clinic",
    "408 646 6147",
    "2114 Senter Rd Ste 12 San Jose, CA 95112",
    "tbeautycenterskin@gmail.com",
  ],
  icons: {
    icon: [
      {
        url: "/Logo32x32.png",
        href: "/Logo32x32.png",
      },
    ],
  },
  openGraph: {
    title: "T Beauty Center",
    description:
      "Transform your look with expert beauty and wellness services at T Beauty Center. From skincare to advanced cosmetic treatments, we care for your beauty needs.",
    url: "https://tbeautycenter.com",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "T Beauty Center Logo",
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Dancing.variable} ${Bar.variable} antialiased text-text-black bg-white relative`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
