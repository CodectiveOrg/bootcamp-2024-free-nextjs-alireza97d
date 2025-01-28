import { ReactElement } from "react";

import DoctorImageComponent from "@/components/common/doctor-image/doctor-image.component";

import { DoctorModel } from "@/types/doctor.type";

import styles from "./info-card.module.css";


type Props = { doctorDetails: DoctorModel };

const InfoCardComponent: React.FC<Props> = ({ doctorDetails }): ReactElement => {
    return (
        <div className={styles.card}>

            <div className={styles.action}>
                <ul>
                    <li>
                        <button>ذخیره</button>
                    </li>
                    <li>
                        <button>اشتراک گذاری</button>
                    </li>
                    <li>
                        <button>گزارش</button>
                    </li>
                </ul>

                <span>10K</span>
            </div>

            <div className={styles.info}>
                <DoctorImageComponent {...doctorDetails} />

                <div className="">
                    <h1>{doctorDetails.name}</h1>
                    <span>شماره نظام پزشکی: 165017</span>
                </div>
            </div>

            <div className={styles.brief_container}>
                <strong className={styles.brief}>
                    {doctorDetails.brief}
                </strong>

                <span className={styles.rate}>
                    <span className={styles.ave_rate}>{doctorDetails.averageRating} از 5</span>
                    &nbsp;رضایت
                    ({doctorDetails.totalVotes} نظر)
                </span>
            </div>
        </div>
    )
}

export default InfoCardComponent;
