import { PropsWithChildren, ReactElement } from "react";

import styles from "@/components/card/card.module.css";

type Props = PropsWithChildren;

const CardComponent = ({ children }: Props): ReactElement => {
  return <div className={styles.card}>{children}</div>;
};

export default CardComponent;
