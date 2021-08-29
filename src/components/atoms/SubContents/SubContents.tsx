import React from "react";
import styles from "./SubContents.module.scss";

export type Props = {
  title: string;
  children?: React.ReactNode
};

export const SubContents: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContentHeader}>
        <span className={styles.subContentTitle}>{title}</span>
      </div>
      {children}
    </div>
  );
};
