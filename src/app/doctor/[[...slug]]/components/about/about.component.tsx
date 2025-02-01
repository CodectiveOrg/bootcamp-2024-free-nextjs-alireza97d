import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./about.module.css";

type Props = {
  aboutText: string;
};

const AboutComponent: React.FC<Props> = ({ aboutText }): ReactNode => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>درباره دکتر</h2>
      </div>
      <CardComponent>
        <div
          dangerouslySetInnerHTML={{ __html: aboutText ?? "" }}
          className={styles.about}
        />
      </CardComponent>
    </div>
  );
};

export default AboutComponent;
