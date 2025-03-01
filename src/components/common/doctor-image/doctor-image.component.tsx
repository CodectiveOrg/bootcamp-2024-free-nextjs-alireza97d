import { ReactElement } from "react";

import Image from "next/image";

import { GenderEnums } from "@/enums/gender";
import { Gender } from "@/types/doctor.type";

import femaleImg from "@/assets/fallback-images/portrait-3d-female-doctor.jpg";
import maleImg from "@/assets/fallback-images/portrait-3d-male-doctor.jpg";

import styles from "./doctor-image.module.css";

type Props = {
  name: string;
  image: string;
  gender: Gender;
};

const DoctorImageComponent: React.FC<Props> = ({
  name,
  image,
  gender,
}): ReactElement => {
  return (
    <Image
      src={image || (gender.en === GenderEnums.MALE ? maleImg : femaleImg)}
      width={80}
      height={80}
      alt={name}
      className={styles.image}
    />
  );
};

export default DoctorImageComponent;
