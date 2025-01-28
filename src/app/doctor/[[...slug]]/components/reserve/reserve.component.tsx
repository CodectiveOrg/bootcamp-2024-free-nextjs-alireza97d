
import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";
import { MingcuteArrowLeftLine } from "@/icons/MingcuteArrowLeftLine";

import styles from "./reserve.module.css";

const ReserveComponent = (): ReactNode => {
    return (
        <CardComponent customStyle={styles.card}>
            <div className={styles.container}>
                <div className={styles.price}>
                    <span>نوبت اینترنتی و مراجعه حضوری</span>
                </div>

                <div className={styles.note}>
                    <ul>
                        <li>امکان دریافت زودترین نوبت</li>
                    </ul>
                </div>

                <button>
                    <span>دریافت نوبت</span>
                    <MingcuteArrowLeftLine />
                </button>
            </div>
        </CardComponent>
    )
}

export default ReserveComponent;
