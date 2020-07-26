import React from "react";
import styles from "./HeaderMenuItem.module.scss";

export type Props = {
  title: string;
  click: () => void;
};

export const HeaderMenuItem: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container} onClick={props.click}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};
