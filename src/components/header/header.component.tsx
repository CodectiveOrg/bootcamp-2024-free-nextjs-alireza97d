"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLinkComponent } from "../button/button.component";

import clsx from "clsx";

import { menu, menuType } from "@/constant/header/menu";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {menu.map((item: menuType, index: number) => {
            const title = item.title;
            const href = item.href;
            return (
              <li key={index}>
                <Link
                  href={`/${href}`}
                  className={clsx(pathname === `/${href}` && styles.active)}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ButtonLinkComponent
        variant="primary"
        shape="outlined"
        className={styles.cta}
        href="/auth/sign-in"
      >
        ورود | ثبت‌نام
      </ButtonLinkComponent>
    </header>
  );
}
