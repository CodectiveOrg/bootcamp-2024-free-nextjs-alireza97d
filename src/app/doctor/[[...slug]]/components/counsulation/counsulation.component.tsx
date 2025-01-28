import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./counsulation.module.css"
import { MingcuteArrowLeftLine } from "@/icons/MingcuteArrowLeftLine";

const price = 190000;

const CounsulationComponent = (): ReactElement => {
    return (
        <CardComponent customStyle={styles.card}>
            <div className={styles.container}>
                <div className={styles.price}>
                    <span>همین الان آنلاین ویزیت شوید</span>
                    <span>{price.toLocaleString()} تومان</span>
                </div>

                <div className={styles.note}>
                    <ul>
                        <li>ویزیت آنلاین در پیام رسان:</li>
                        <li>تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی</li>
                        <li>امکان برقراری تماس با این پزشک وجود دارد.</li>
                        <li>
                            تا
                            &nbsp;
                            <span>۳ روز</span>
                            &nbsp;
                            می‌توانید هر سوالی دارید از پزشک بپرسید
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
    )
}

export default CounsulationComponent;
