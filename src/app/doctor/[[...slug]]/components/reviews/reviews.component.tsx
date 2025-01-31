import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";
import RatingProgressComponent from "./rating-progress.component";
import ReviewItemComponent from "./review-item.component";
import LoadMoreComponent from "@/components/common/buttons/load-more.component";

import { DoctorsReviews } from "@/types/doctor.type";

import styles from "./reviews.module.css";

const maxVote = 5;

type Props = {
    averageRating: number;
    totalVotes: number;
    doctorsReviews: DoctorsReviews[];
}

const ReviewsComponent: React.FC<Props> = ({ averageRating, totalVotes, doctorsReviews }): ReactNode => {
    // const commnets = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6));

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
                    <span className={styles.ave_rate}>{averageRating.toLocaleString('fa-IR')} از {maxVote?.toLocaleString('fa-IR')}</span>
                    &nbsp;رضایت
                    ({totalVotes.toLocaleString('fa-IR')} نظر)
                </div>

                <div>
                    <RatingProgressComponent />
                </div>
            </CardComponent>

            {(doctorsReviews?.length !== 0) &&
                <CardComponent customStyle={styles.card}>
                    {doctorsReviews?.map((review: DoctorsReviews, index) => (
                        <ReviewItemComponent key={index} review={review} />
                    ))}

                    <LoadMoreComponent />
                </CardComponent>
            }
        </div>
    )
}

export default ReviewsComponent;
