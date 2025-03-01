import { PropsWithChildren, ReactElement } from "react";

import styles from "@/components/card/card.module.css";
import clsx from "clsx";

type Props = PropsWithChildren & {
  customStyle?: string;
};

const CardComponent = ({ children, customStyle }: Props): ReactElement => {
  return <div className={clsx(styles.card, customStyle)}>{children}</div>;
};

export default CardComponent;
