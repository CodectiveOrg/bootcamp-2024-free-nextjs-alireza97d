"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "../../providers/Filters/filters.provider";

import CardComponent from "@/components/card/card.component";

import styles from "./clear-all-filter.module.css";

const ClearAllFilterComponent = (): ReactElement => {
  const { clearAll } = useContext(FiltersContext);

  return (
    <CardComponent>
      <div>
        <button className={styles.clear} onClick={clearAll}>
          حذف همه فیلترها
        </button>
      </div>
    </CardComponent>
  );
};

export default ClearAllFilterComponent;
