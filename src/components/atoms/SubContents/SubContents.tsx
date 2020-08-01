import React from "react";
import styles from "./SubContents.module.scss";

export type Props = {
  title: string;
  body: string;
};

export const SubContents: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContentHeader}>
        <span className={styles.subContentTitle}>{props.title}</span>
      </div>
      {props.body}
    </div>
  );
};
