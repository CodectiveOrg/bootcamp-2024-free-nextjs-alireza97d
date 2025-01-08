import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "@/components/filter-button/filter-button.module.css";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
};

const FilterButtonComponent = ({
  className,
  children,
  isActive = false,
  ...otherProps
}: Props): ReactElement => {
  return (
    <button
      className={clsx(
        styles["filter-button"],
        isActive && styles.active,
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FilterButtonComponent;
