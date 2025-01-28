import { ReactElement } from "react";

import ItemComponent from "../item/item.component";

import { DoctorModel } from "@/types/doctor.type";

import styles from "./list.module.css";
import Link from "next/link";

const ListComponent = ({
  doctors,
}: {
  doctors: DoctorModel[];
}): ReactElement => {
  if (doctors.length === 0) {
    return <p>متاسفیم. درحال حاظر پزشکی وجود ندارد!</p>;
  }

  return (
    <ul className={styles.container}>
      {doctors.map((item: DoctorModel) => (
        <Link key={item.id} href={{ pathname: `/doctor/${item.id}` }}>
          <ItemComponent item={item} />
        </Link>
      ))}
    </ul>
  );
};

export default ListComponent;
