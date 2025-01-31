"use client";

import { ReactElement, useContext } from "react";

import { VoteFiltersContext } from "@/app/doctor/provider/reviews/vote-filters.provider";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { id: 1, value: "all", label: "همه" },
  { id: 2, value: "best", label: "امتیاز ۵" },
  { id: 3, value: "middle", label: "بین ۳ تا ۵ امتیاز" },
  { id: 4, value: "bad", label: "کمتر از ۳ امتیاز" },
];

export default function VoteFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(VoteFiltersContext);

  const handleChange = (option: SelectOptionType) => {
    dispatchFilters({ type: "SET_VOTE_FILTER", payload: option.value as "all" | "best" | "middle" | "bad" });
  };

  return (
    <SelectComponent
      floating
      title="بر اساس امتیاز"
      options={options}
      selectedOption={options.find(opt => opt.value === filters.selectedFilter) || options[0]}
      onSelectedOptionChange={handleChange}
    />
  );
}
