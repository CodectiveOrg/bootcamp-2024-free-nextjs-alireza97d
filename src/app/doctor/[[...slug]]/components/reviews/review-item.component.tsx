import { ReactElement } from "react";

import MingcuteThumbUp2Line from "@/icons/MingcuteThumbUp2Line";
import MingcuteShare2Line from "@/icons/MingcuteShare2Line";
import MingcuteMore2Line from "@/icons/MingcuteMore2Line";

import { timeAgo } from "@/utils/timeAgo";

import { DoctorsReviews } from "@/types/doctor.type";

import styles from "./review-item.module.css";

type Props = {
  review?: DoctorsReviews;
};

const ReviewItemComponent: React.FC<Props> = ({ review }): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <div className={styles.owner}>
          <div className={styles.image}>
            <span>س</span>
          </div>

          <div className={styles.name_container}>
            <div className={styles.name}>
              <span>{review?.patientName}</span>
              {review?.isVisited && (
                <span className={styles.visited_badge}>ویزیت شده</span>
              )}
            </div>
            <div className={styles.date}>
              {review?.date && (
                <>
                  <span>{timeAgo(review?.date)}</span>
                  &nbsp;<span>|</span>&nbsp;
                </>
              )}

              <span>ویزیت آنلاین پذیرش24</span>
            </div>
          </div>
        </div>

        <div className={styles.rate_container}>
          <span className={styles.rate}>
            {review?.vote.toLocaleString("fa-IR")}
          </span>

          <div className={styles.more_btn}>
            <MingcuteMore2Line />
          </div>
        </div>
      </div>

      <p className={styles.text}>{review?.text}</p>

      <div className={styles.action_btn}>
        <button>
          <MingcuteThumbUp2Line />
          <span>چقدر مفید بود؟</span>
        </button>

        <button>
          <MingcuteShare2Line />
          <span>ارسال کن</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewItemComponent;
