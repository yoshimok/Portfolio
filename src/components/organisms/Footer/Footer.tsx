import React from "react";
import styles from "./Footer.module.scss";

export type Props = {
  copyRight: string;
};

export const Footer: React.FC<Props> = ({ copyRight }) => {
  return (
    <div className={styles.container}>
      <div className={styles.copyRight}>{copyRight}</div>
    </div>
  );
};
