import { StaticImport } from "next/dist/shared/lib/get-img-props";

import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";


export const socialsMenu = [
    { imgComponent: MingcuteTelegramFill, alt: "تلگرام", href: "https://t.me/Codective" },
    { imgComponent: MingcuteLinkedinFill, alt: "لینکدین", href: "https://www.linkedin.com/in/bijanprogrammer/" },
    { imgComponent: MingcuteYoutubeFill, alt: "یوتیوب", href: "https://www.youtube.com/@BijanProgrammer" },
];

export type socialsMenuType = {
    imgComponent: React.ComponentType;
    alt: string;
    href: string;
};

export const certificatesMenu = [
    { svgSrc: idkLogo, alt: "IDK Logo", href: "#" },
    { svgSrc: certificateLogo, alt: "Certificate Logo", href: "#" },
    { svgSrc: enamadLogo, alt: "Enamad Logo", href: "#" },
];

export type certificatesMenuType = {
    svgSrc: string | StaticImport;
    alt: string;
    href: string;
};
