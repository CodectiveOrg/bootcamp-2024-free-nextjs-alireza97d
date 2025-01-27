import { ReactElement } from "react";

import Image from "next/image";

import { MingcuteStarFill } from "@/icons/MingcuteStarFill";

import { DoctorModel } from "@/types/doctor.type";
import { GenderEnums } from "@/enums/gender";

import maleImg from "@/assets/fallback-images/portrait-3d-male-doctor.jpg";
import femaleImg from "@/assets/fallback-images/portrait-3d-female-doctor.jpg";

import styles from "./item.module.css";
import { MingcuteLocationFill } from "@/icons/MingcuteLocationFill";
import { MingcuteArrowLeftLine } from "@/icons/MingcuteArrowLeftLine";

type Props = {
  item: DoctorModel;
};

const ItemComponent = ({ item }: Props): ReactElement => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <Image
          src={
            item?.image ||
            (item.gender.en === GenderEnums.MALE ? maleImg : femaleImg)
          }
          width={80}
          height={80}
          alt={item.name}
          className={styles.image}
        />
        <div className="">
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.brief}>{item.brief}</p>
          <span className={styles.rate}>
            <MingcuteStarFill color="#FFF200" />
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
