import React from "react";
import styles from "./Name.module.scss";

export type Props = {
  name: string;
  position: string;
};

export const Name: React.FC<Props> = ({ name, position }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
    </div>
  );
};
