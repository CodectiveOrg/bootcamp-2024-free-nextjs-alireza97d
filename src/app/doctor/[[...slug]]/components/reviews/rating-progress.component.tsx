import { ReactElement } from "react";

import { RatingProgress } from "@/types/doctor.type";

import styles from "./rating-progress.module.css";

type Props = {
  ratingProgress: RatingProgress[];
};

const RatingProgressComponent: React.FC<Props> = ({
  ratingProgress,
}): ReactElement => {
  return (
    <div className={styles.progress_container}>
      {ratingProgress.map((rating, index) => {
        return (
          <div key={index}>
            <span className={styles.progress_lable}>{rating.lable}</span>
            <div className={styles.progress_items}>
              <div role="progressbar">
                <div
                  style={{ width: `${(rating.rate / 5) * 100}%` }}
                  className={styles.progress_fill}
                ></div>
              </div>
              <span>{rating.rate.toLocaleString()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingProgressComponent;
