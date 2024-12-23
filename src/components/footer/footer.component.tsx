import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import { certificatesMenu, certificatesMenuType, socialsMenu, socialsMenuType } from "@/constant/footer/menu";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
    return (
        <footer className={styles.footer}>
            <div className={styles.writings}>
                <div className={styles.logo}>دکتر من</div>
                <p className={styles.description}>
                    تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های ایران
                </p>
            </div>
            <div className={styles.visuals}>
                <ul className={styles.certificates}>
                    {certificatesMenu.map((item: certificatesMenuType, index: number) => (
                        <li key={`certificates-${index}`}>
                            <Link href={item.href}>
                                <Image src={item.svgSrc} alt={item.alt} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={styles.socials}>
                    {socialsMenu.map((item: socialsMenuType, index: number) => (
                        <li key={`socials-${index}`}>
                            <Link href={item.href} target="_blank" aria-label={item.alt}>
                                <item.imgComponent />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p className={styles.copy}>
                تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
                &nbsp;<strong>سامانه دکتر من</strong>&nbsp; می‌باشد!
            </p>
        </footer>
    );
};