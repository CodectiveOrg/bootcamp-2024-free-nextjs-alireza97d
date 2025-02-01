"use client";

import { PropsWithChildren, ReactElement } from "react";

import ReviewsFiltersProvider from "@/app/doctor/provider/reviews/reviews-filters.provider";
import ReviewsProvider from "@/app/doctor/provider/reviews/reviews.provider";
import VoteFiltersProvider from "@/app/doctor/provider/reviews/vote-filters.provider";

import { DoctorsReviews } from "@/types/doctor.type";

type Props = PropsWithChildren & {
  doctorsReviews: DoctorsReviews[];
};

const ReviewsWrapperComponent: React.FC<Props> = ({
  children,
  doctorsReviews,
}): ReactElement => {
  return (
    <VoteFiltersProvider>
      <ReviewsFiltersProvider>
        <ReviewsProvider doctorsReviews={doctorsReviews}>
          {children}
        </ReviewsProvider>
      </ReviewsFiltersProvider>
    </VoteFiltersProvider>
  );
};

export default ReviewsWrapperComponent;
