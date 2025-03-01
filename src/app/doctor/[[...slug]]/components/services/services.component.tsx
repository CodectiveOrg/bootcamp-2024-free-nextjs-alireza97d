import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";
import { MingcuteAddCircleFill } from "@/icons/MingcuteAddCircleFill";

import styles from "./services.module.css";

type Props = {
  doctorName: string;
  services: string[];
};

const ServicesComponent: React.FC<Props> = ({
  doctorName,
  services,
}): ReactElement => {
  return (
    <div className={styles.services}>
      <div className={styles.title}>
        <h2>خدمات دکتر {doctorName}</h2>
      </div>
      <CardComponent>
        <div className={styles["services-item"]}>
          <ul>
            {services?.map((service, index) => {
              return (
                <li key={index}>
                  <MingcuteAddCircleFill />
                  {service}
                </li>
              );
            })}
          </ul>
        </div>
      </CardComponent>
    </div>
  );
};

export default ServicesComponent;
