import React from "react";
import styles from "./HeaderMenuItem.module.scss";

export type Props = {
  title: string;
  click: () => void;
};

export const HeaderMenuItem: React.FC<Props> = ({ title, click }) => {
  return (
    <div className={styles.container} onClick={click}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
