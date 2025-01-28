import { ReactElement } from "react";

import DoctorImageComponent from "@/components/common/doctor-image/doctor-image.component";

import { DoctorModel } from "@/types/doctor.type";

import styles from "./info-card.module.css";


type Props = { doctorDetails: DoctorModel };

const InfoCardComponent: React.FC<Props> = ({ doctorDetails }): ReactElement => {
    return (
        <div className={styles.info}>
            <DoctorImageComponent {...doctorDetails} />
        </div>
    )
}

export default InfoCardComponent;
