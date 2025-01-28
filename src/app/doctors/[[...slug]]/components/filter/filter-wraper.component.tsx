import { ReactElement } from "react";

import ClearAllFilterComponent from "./clear-all-filter.component";
import FilterComponent from "./filter.component";

import { specialties } from "@/models/specialties";
import { degrees } from "@/models/degrees";

import { GenderEnums } from "@/enums/gender";
import { FilterEnums } from "../../enums/filter.enum";

import { isEmpty } from "@/utils/isEmpty";
import { ResultObject } from "@/utils/convertListToObject";

import styles from "./filter-wraper.component.module.css";

type Props = {
  selectedFilters: ResultObject;
};

const FilterWraperComponent = ({
  selectedFilters = {},
}: Props): ReactElement => {
  return (
    <div className={styles.filters}>
      {!isEmpty(selectedFilters) && <ClearAllFilterComponent />}

      <FilterComponent
        filterName={FilterEnums.SPECIALTY}
        title="تخصص‌ها"
        options={specialties}
        selectedFilters={selectedFilters}
      />

      <FilterComponent
        filterName={FilterEnums.DEGREE}
        title="درجه علمی"
        options={degrees}
        selectedFilters={selectedFilters}
      />

      <FilterComponent
        filterName={FilterEnums.CITY}
        title="شهر"
        options={[
          { id: "ardebil", en: "ardebil", fa: "اردبیل" },
          { id: "zahedan", en: "zahedan", fa: "زاهدان" },
          { id: "bandarabas", en: "bandarabas", fa: "بندرعباس" },
          { id: "rasht", en: "rasht", fa: "رشت" },
          { id: "tehran", en: "tehran", fa: "تهران" },
        ]}
        selectedFilters={selectedFilters}
      />

      <FilterComponent
        filterName={FilterEnums.GENDER}
        title="جنسیت"
        options={[
          { id: "male", en: GenderEnums.MALE, fa: "مرد" },
          { id: "female", en: GenderEnums.FEMALE, fa: "زن" },
          { id: "both", en: GenderEnums.BOTH, fa: "زن و مرد" },
        ]}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

export default FilterWraperComponent;
