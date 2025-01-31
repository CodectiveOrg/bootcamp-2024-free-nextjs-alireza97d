"use client";

import { ReactElement, useContext } from "react";

import { ReviewsFiltersContext } from "@/app/doctor/provider/reviews/reviews-filters.provider";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { id: 1, value: "all", label: "همه" },
  { id: 2, value: "visited", label: "ویزیت شده" },
  { id: 3, value: "noVisited", label: "ویزیت نشده" },
];

export default function SortComponent(): ReactElement {

  const { filters, dispatchFilters } = useContext(ReviewsFiltersContext);

  const handleChange = (option: SelectOptionType) => {
    dispatchFilters({ type: "SET_FILTER", payload: option.value as "all" | "visited" | "noVisited" });
  };

  return (
    <SelectComponent
      floating
      title="مرتب‌سازی"
      options={options}
      selectedOption={options.find(opt => opt.value === filters.selectedFilter) || options[0]}
      onSelectedOptionChange={handleChange}
    />
  );
}
