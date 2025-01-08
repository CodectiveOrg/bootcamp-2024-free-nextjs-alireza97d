'use client'

import { ReactElement, useContext } from "react";

import { FiltersContext } from "../../providers/Filters/filters.provider";

import CardComponent from "@/components/card/card.component";

import styles from "./remove-filter.module.css"


const RemoveAllFilterComponent = (): ReactElement => {
    const { clearAll } = useContext(FiltersContext);

    return (
        <CardComponent>
            <div>
                <button className={styles.remove} onClick={clearAll}>
                    حذف همه فیلترها
                </button>
            </div>
        </CardComponent>
    )
}

export default RemoveAllFilterComponent;
