"use client";

import { createContext, PropsWithChildren, ReactElement, useContext, useEffect, useState } from "react";

import { ReviewsFiltersContext } from "./reviews-filters.provider";
import { VoteFiltersContext } from "./vote-filters.provider";

import { DoctorsReviews } from "@/types/doctor.type";

type ContextValue = {
  filteredReviews: DoctorsReviews[];
};

export const ReviewsContext = createContext<ContextValue>({
  filteredReviews: [],
});

type Props = PropsWithChildren & {
  doctorsReviews: DoctorsReviews[];
};

export default function ReviewsProvider({ children, doctorsReviews }: Props): ReactElement {
  const { filters: visitFilters } = useContext(ReviewsFiltersContext);
  const { filters: voteFilters } = useContext(VoteFiltersContext);

  const [filteredReviews, setFilteredReviews] = useState<DoctorsReviews[]>(doctorsReviews);

  useEffect(() => {
    let filtered = doctorsReviews;

    if (visitFilters.selectedFilter === "visited") {
      filtered = filtered.filter(review => review.isVisited);
    } else if (visitFilters.selectedFilter === "noVisited") {
      filtered = filtered.filter(review => !review.isVisited);
    }

    if (voteFilters.selectedFilter === "best") {
      filtered = filtered.filter(review => review.vote === 5);
    } else if (voteFilters.selectedFilter === "middle") {
      filtered = filtered.filter(review => review.vote >= 3 && review.vote < 5);
    } else if (voteFilters.selectedFilter === "bad") {
      filtered = filtered.filter(review => review.vote < 3);
    }

    setFilteredReviews(filtered);
  }, [visitFilters, voteFilters, doctorsReviews]);

  return (
    <ReviewsContext.Provider value={{ filteredReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}
