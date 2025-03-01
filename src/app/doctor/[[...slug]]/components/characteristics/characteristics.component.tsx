import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";
import { MingcuteAIFill } from "@/icons/MingcuteAIFill";

import styles from "./characteristics.module.css";

type Props = {
  doctorName: string;
  characteristics: string[];
};

const CharacteristicsComponent: React.FC<Props> = ({
  doctorName,
  characteristics,
}): ReactElement => {
  return (
    <div className={styles.characteristics}>
      <div className={styles.title}>
        <h2>ویژگی‌های دکتر {doctorName}</h2>
      </div>
      <CardComponent>
        <div className={styles["characteristics-item"]}>
          <ul>
            {characteristics?.map((characteristic, index) => {
              return (
                <li key={index}>
                  <MingcuteAIFill />
                  {characteristic}
                </li>
              );
            })}
          </ul>
        </div>
      </CardComponent>
    </div>
  );
};

export default CharacteristicsComponent;
