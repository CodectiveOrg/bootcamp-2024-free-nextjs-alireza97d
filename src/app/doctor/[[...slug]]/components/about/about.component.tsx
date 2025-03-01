"use client";

import { ReactNode } from "react";

import DOMPurify from "dompurify";

import CardComponent from "@/components/card/card.component";

import styles from "./about.module.css";

type Props = {
  aboutText: string;
};

const AboutComponent: React.FC<Props> = ({ aboutText }): ReactNode => {
  const sanitizedHTML = DOMPurify.sanitize(aboutText ?? "");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>درباره دکتر</h2>
      </div>
      <CardComponent>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          className={styles.about}
        />
      </CardComponent>
    </div>
  );
};

export default AboutComponent;
