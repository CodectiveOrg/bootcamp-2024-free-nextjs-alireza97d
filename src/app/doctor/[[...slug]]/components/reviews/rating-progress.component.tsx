import { ReactElement } from "react";

import styles from "./rating-progress.module.css";

const RatingProgressComponent = (): ReactElement => {
  const ratings = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 6),
  );

  return (
    <div className={styles.progress_container}>
      {ratings.map((rating, index) => {
        return (
          <div key={index}>
            <span className={styles.progress_lable}>برخورد مناسب پزشک</span>
            <div className={styles.progress_items}>
              <div role="progressbar">
                <div
                  style={{ width: `${(rating / 5) * 100}%` }}
                  className={styles.progress_fill}
                ></div>
              </div>
              <span>{rating.toLocaleString("fa-IR")}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingProgressComponent;
