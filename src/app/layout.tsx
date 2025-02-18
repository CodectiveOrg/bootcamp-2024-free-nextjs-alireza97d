import { ReactElement } from "react";

import type { Metadata } from "next";
import localFont from "next/font/local";

import FooterComponent from "@/components/footer/footer.component";
import HeaderComponent from "@/components/header/header.component";

import "@/styles/typography.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین",
};

const vazirmatn_FD = localFont({
  src: [
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-Thin.woff2",
      weight: '100',
      style: 'normal',
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-ExtraLight.woff2",
      weight: '200',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-Light.woff2",
      weight: '300',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-Regular.woff2",
      weight: '400',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-Medium.woff2",
      weight: '500',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-SemiBold.woff2",
      weight: '600',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-Bold.woff2",
      weight: '700',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-ExtraBold.woff2",
      weight: '800',
      style: 'normal'
    },
    {
      path: "../public/fonts/vazirmatn/Vazirmatn-FD-Black.woff2",
      weight: '900',
      style: 'normal'
    },
  ],
  variable: "--font-vazirmatn"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn_FD.variable}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <FooterComponent />
      </body>
    </html>
  );
}
