import { ReactElement } from "react";

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import FooterComponent from "@/components/footer/footer.component";
import HeaderComponent from "@/components/header/header.component";

import "@/styles/typography.css";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
  variable: "--vazir-font",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجوی دکتر و رزرو نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
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
