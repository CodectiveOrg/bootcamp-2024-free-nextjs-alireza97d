import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import MingcuteCommentLine from "@/icons/MingcuteCommentLine";
import MingcuteAwardLine from "@/icons/MingcuteAwardLine";

import styles from "./activities.module.css"

const comment = 231;

const ActivitiesComponent = (): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>فعالیت‌ها</h2>
            </div>
            <CardComponent>
                <div className={styles.activity}>
                    <ul>
                        <li>
                            <MingcuteCommentLine />
                            <span>
                                <span className={styles.consulation_count}>{comment.toLocaleString('fa-IR')}</span>
                                &nbsp;
                                <span>مشاوره فعال</span>
                            </span>
                        </li>

                        <li>
                            <MingcuteAwardLine />
                            <span>
                                پذیرش24 بیش از 2 سال و 11 ماه افتخار میزبانی از صفحه اختصاصی دکتر معصومه دلجو را داشته است.
                            </span>
                        </li>
                    </ul>
                </div>
            </CardComponent>
        </div>
    )
}

export default ActivitiesComponent;
