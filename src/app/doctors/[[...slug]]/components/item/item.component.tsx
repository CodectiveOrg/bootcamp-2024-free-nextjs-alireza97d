import { ReactElement } from "react";

import DoctorImageComponent from "@/components/common/doctor-image/doctor-image.component";

import { MingcuteStarFill } from "@/icons/MingcuteStarFill";
import { MingcuteLocationFill } from "@/icons/MingcuteLocationFill";
import { MingcuteArrowLeftLine } from "@/icons/MingcuteArrowLeftLine";

import { DoctorModel } from "@/types/doctor.type";

import styles from "./item.module.css";

type Props = {
  item: DoctorModel;
};

const ItemComponent = ({ item }: Props): ReactElement => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <DoctorImageComponent {...item} />

        <div className="">
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.brief}>{item.brief}</p>
          <span className={styles.rate}>
            <span className={styles.star}>
              <MingcuteStarFill />
            </span>
            <span>{item.averageRating}</span>
            &nbsp; ({item.totalVotes} نظر)
          </span>
        </div>
      </div>
      <div className={styles.badge}>
        {item.badges.map((item, index) => (
          <span className={styles.badge_item} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.address}>
        <address>
          <MingcuteLocationFill />
          {item.address}
        </address>
      </div>

      <button>
        <span>دریافت نوبت</span>
        <MingcuteArrowLeftLine />
      </button>
    </li>
  );
};

export default ItemComponent;
