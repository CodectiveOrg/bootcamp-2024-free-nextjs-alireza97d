import { ReactElement, useMemo } from "react";

import ListComponent from "./components/list/list.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import FilterWraperComponent from "./components/filter/filter-wraper.component";

import { doctorsData } from "@/models/doctors";
import { DoctorModel } from "@/types/doctor.type";

import convertListToObject from "@/utils/convertListToObject";

import FiltersProvider from "./providers/Filters/filters.provider";

import styles from "./page.module.css";

type SearchPageType = {
  params: { slug: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const doctors: DoctorModel[] = doctorsData;

const SearchPage: React.FC<SearchPageType> = ({
  params,
  searchParams,
}): ReactElement => {
  const getValueFromUrl = useMemo(
    () => convertListToObject(params.slug, searchParams || {}),
    [params.slug, searchParams],
  );

  const filteredDoctors: DoctorModel[] = useMemo(() => {
    return doctors.filter((doctor) => {
      if (getValueFromUrl.city && doctor.city.en !== getValueFromUrl.city) {
        return false;
      }

      if (
        getValueFromUrl.specialty &&
        doctor.specialty.en !== getValueFromUrl.specialty
      ) {
        return false;
      }

      if (
        getValueFromUrl.degree &&
        doctor.degree.en !== getValueFromUrl.degree
      ) {
        return false;
      }

      if (
        getValueFromUrl.gender &&
        doctor.gender.en !== getValueFromUrl.gender
      ) {
        return false;
      }

      return true;
    });
  }, [getValueFromUrl]);

  return (
    <FiltersProvider>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
      <div className={styles.page}>
        <FilterWraperComponent selectedFilters={getValueFromUrl} />
        <ListComponent doctors={filteredDoctors} />
      </div>
    </FiltersProvider>
  );
};

export default SearchPage;
