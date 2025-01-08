import { ReactElement } from "react";

import FilterComponent from "./components/filter/filter.component";
import ListComponent from "./components/list/list.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import RemoveAllFilterComponent from "./components/filter/remove-filter.component";

import { specialties } from "@/models/specialties";
import { degries } from "@/models/degrees";
import { doctorsData } from "@/models/doctors";

import { GenderEnums } from "@/enums/gender";
import { FilterEnums } from "./enums/filter.enum";
import { DoctorModel } from "@/types/doctor.type";

import { isEmpty } from "@/utils/isEmpty";
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
  const getValueFromUrl = convertListToObject(params.slug, searchParams || {});

  const filteredDoctors: DoctorModel[] = doctors.filter((doctor) => {
    if (getValueFromUrl.city && doctor.city.en !== getValueFromUrl.city) {
      return false;
    }

    if (
      getValueFromUrl.specialty &&
      doctor.specialty.en !== getValueFromUrl.specialty
    ) {
      return false;
    }

    if (getValueFromUrl.degree && doctor.degree.en !== getValueFromUrl.degree) {
      return false;
    }

    if (getValueFromUrl.gender && doctor.gender.en !== getValueFromUrl.gender) {
      return false;
    }

    return true;
  });

  return (
    <FiltersProvider>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
      <div className={styles.page}>
        <div className={styles.filters}>
          {!isEmpty(getValueFromUrl) && <RemoveAllFilterComponent />}

          <FilterComponent
            typeFilter={FilterEnums.SPECIALTY}
            title="تخصص‌ها"
            options={specialties}
            selectedFilters={getValueFromUrl}
          />

          <FilterComponent
            typeFilter={FilterEnums.DEGREE}
            title="درجه علمی"
            options={degries}
            selectedFilters={getValueFromUrl}
          />

          <FilterComponent
            typeFilter={FilterEnums.CITY}
            title="شهر"
            options={[
              { id: "ardebil", en: "ardebil", fa: "اردبیل" },
              { id: "zahedan", en: "zahedan", fa: "زاهدان" },
              { id: "bandarabas", en: "bandarabas", fa: "بندرعباس" },
              { id: "rasht", en: "rasht", fa: "رشت" },
              { id: "tehran", en: "tehran", fa: "تهران" },
            ]}
            selectedFilters={getValueFromUrl}
          />

          <FilterComponent
            typeFilter={FilterEnums.GENDER}
            title="جنسیت"
            options={[
              { id: "male", en: GenderEnums.MALE, fa: "مرد" },
              { id: "female", en: GenderEnums.FEMALE, fa: "زن" },
              { id: "both", en: GenderEnums.BOTH, fa: "زن و مرد" },
            ]}
            selectedFilters={getValueFromUrl}
          />
        </div>
        <ListComponent doctors={filteredDoctors} />
      </div>
    </FiltersProvider>
  );
};

export default SearchPage;
