import { ReactElement } from "react";

import DoctorImageComponent from "@/components/common/doctor-image/doctor-image.component";
import CardComponent from "@/components/card/card.component";

import MingcuteEye2Line from "@/icons/MingcuteEye2Line";
import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";
import MingcuteShare2Line from "@/icons/MingcuteShare2Line";
import MingcutePencilLine from "@/icons/MingcutePencilLine";

import { DoctorModel } from "@/types/doctor.type";

import styles from "./info-card.module.css";

const view = 10;
const maxVote = 5;

type Props = { doctorDetails: DoctorModel };

const InfoCardComponent: React.FC<Props> = ({
  doctorDetails,
}): ReactElement => {
  return (
    <CardComponent>
      <div className={styles.card}>
        <div className={styles.action}>
          <ul>
            <li>
              <button>
                <MingcuteBookmarkLine />
                <span>ذخیره</span>
              </button>
            </li>
            <li>
              <button>
                <MingcuteShare2Line />
                <span>اشتراک گذاری</span>
              </button>
            </li>
            <li>
              <button>
                <MingcutePencilLine />
                <span>گزارش</span>
              </button>
            </li>
          </ul>

          <span className={styles.review}>
            <span>{view.toLocaleString()}K</span>
            <MingcuteEye2Line />
          </span>
        </div>

        <div className={styles.info}>
          <DoctorImageComponent {...doctorDetails} />

          <div className="">
            <h1>{doctorDetails.name}</h1>
            <span>شماره نظام پزشکی: 165017</span>
          </div>
        </div>

        <div className={styles.brief_container}>
          <strong className={styles.brief}>{doctorDetails.brief}</strong>

          <span className={styles.rate}>
            <span className={styles.ave_rate}>
              {doctorDetails?.averageRating?.toLocaleString()} از{" "}
              {maxVote?.toLocaleString()}
            </span>
            &nbsp;رضایت ({doctorDetails?.totalVotes?.toLocaleString()} نظر)
          </span>
        </div>
      </div>
    </CardComponent>
  );
};

export default InfoCardComponent;
