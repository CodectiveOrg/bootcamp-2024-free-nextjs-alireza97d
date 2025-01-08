'use client'

import { ReactElement, useContext } from "react";

import { FiltersContext } from "../../providers/Filters/filters.provider";

import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import { ResultObject } from "@/utils/convertListToObject";
import { FilterEnums } from "../../enums/filter.enum";

import styles from "./filter.module.css"

type Props = {
    typeFilter: FilterEnums;
    title: string;
    options?: { id: string, en: string, fa: string }[];
    selectedFilters: ResultObject
};

const FilterComponent = ({ typeFilter, title, options = [], selectedFilters = {} }: Props): ReactElement => {
    const { changeFilter } = useContext(FiltersContext);

    return (
        <CardComponent>
            <div className={styles.filter}>
                <div className={styles.title}>{title}</div>
                <div className={styles.buttons}>
                    {options.map((option) => (
                        <FilterButtonComponent
                            key={option.id}
                            isActive={Object.values(selectedFilters).includes(option.en)}
                            onClick={() => changeFilter(typeFilter, option.en)}
                        >
                            {option.fa}
                        </FilterButtonComponent>
                    ))}
                </div>
            </div>
        </CardComponent>
    )
}

export default FilterComponent;
