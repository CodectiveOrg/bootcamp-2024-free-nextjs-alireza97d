import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import { MingcuteArrowLeftLine } from "@/icons/MingcuteArrowLeftLine";
import OnlineTowCiecleFill from "@/icons/OnlineTowCiecleFill";

import styles from "./counsulation.module.css";

type Props = {
  price: number;
};

const CounsulationComponent: React.FC<Props> = ({ price }): ReactElement => {
  return (
    <CardComponent customStyle={styles.card}>
      <div className={styles.container}>
        <div className={styles.price}>
          <div className="">
            <OnlineTowCiecleFill />
            <span>همین الان آنلاین ویزیت شوید</span>
          </div>
          <span>{price.toLocaleString("fa-IR")} تومان</span>
        </div>

        <div className={styles.note}>
          <ul>
            <li>ویزیت آنلاین در پیام رسان:</li>
            <li>تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی</li>
            <li>امکان برقراری تماس با این پزشک وجود دارد.</li>
            <li>
              تا &nbsp;
              <span>۳ روز</span>
              &nbsp; می‌توانید هر سوالی دارید از پزشک بپرسید
            </li>
            <li>میانگین زمان انتظار تا ویزیت:</li>
          </ul>
        </div>

        <button>
          <span>
            <span>شروع ویزیت با دکتر</span>
            &nbsp;
            <span>پوراندخت جعفری</span>
          </span>

          <MingcuteArrowLeftLine />
        </button>
      </div>
    </CardComponent>
  );
};

export default CounsulationComponent;
