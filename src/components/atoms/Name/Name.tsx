import React from "react";
import styles from "./Name.module.scss";

export type Props = {
  name: string;
  position: string;
};

export const Name: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.position}>{props.position}</div>
    </div>
  );
};
