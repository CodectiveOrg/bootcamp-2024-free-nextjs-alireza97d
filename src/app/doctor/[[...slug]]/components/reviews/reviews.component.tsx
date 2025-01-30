import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";
import RatingProgressComponent from "./rating-progress.component";
import ReviewItemComponent from "./review-item.component";
import LoadMoreComponent from "@/components/common/buttons/load-more.component";

import styles from "./reviews.module.css";

const ReviewsComponent = (): ReactNode => {
    const commnets = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6));

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>
                    <span>نظرات در مورد دکتر</span>
                    &nbsp;
                    <span>معصومه دلجو</span>
                </h2>
            </div>

            <CardComponent>
                <div className={styles.rate}>
                    <span className={styles.ave_rate}>{2} از 5</span>
                    &nbsp;رضایت
                    ({264} نظر)
                </div>

                <div>
                    <RatingProgressComponent />
                </div>
            </CardComponent>

            <CardComponent customStyle={styles.card}>
                {commnets.map((_, index) => (
                    <ReviewItemComponent key={index} />
                ))}

                <LoadMoreComponent />
            </CardComponent>
        </div>
    )
}

export default ReviewsComponent;
