"use client";

import { ReactNode, useContext } from "react";

import { ReviewsContext } from "@/app/doctor/provider/reviews/reviews.provider";

import CardComponent from "@/components/card/card.component";
import RatingProgressComponent from "./rating-progress.component";
import ReviewItemComponent from "./review-item.component";
import LoadMoreComponent from "@/components/common/buttons/load-more.component";
import SortComponent from "../sort/sort.component";
import VoteFilterComponent from "../vote-filter/vote-filter.component";

import { DoctorsReviews, RatingProgress } from "@/types/doctor.type";

import styles from "./reviews.module.css";

const maxVote = 5;

type Props = {
  doctorName: string;
  averageRating: number;
  totalVotes: number;
  doctorsReviews: DoctorsReviews[];
  ratingProgress: RatingProgress[];
};

const ReviewsComponent: React.FC<Props> = ({
  doctorName,
  averageRating,
  totalVotes,
  doctorsReviews,
  ratingProgress,
}): ReactNode => {
  const { filteredReviews } = useContext(ReviewsContext);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          <span>نظرات در مورد دکتر</span>
          &nbsp;
          <span>{doctorName}</span>
        </h2>
      </div>

      <CardComponent>
        <div className={styles.rate}>
          <span className={styles.ave_rate}>
            {averageRating.toLocaleString()} از {maxVote?.toLocaleString()}
          </span>
          &nbsp;رضایت ({totalVotes.toLocaleString()} نظر)
        </div>

        <div>
          <RatingProgressComponent ratingProgress={ratingProgress} />
        </div>
      </CardComponent>

      {doctorsReviews?.length !== 0 && (
        <CardComponent customStyle={styles.card}>
          <div className={styles.toolbar}>
            <SortComponent />
            <VoteFilterComponent />
          </div>
          {filteredReviews?.map((review: DoctorsReviews, index: number) => (
            <ReviewItemComponent key={index} review={review} />
          ))}

          <LoadMoreComponent />
        </CardComponent>
      )}
    </div>
  );
};

export default ReviewsComponent;
