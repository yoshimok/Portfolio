import React from "react";
import styles from "./Headline.module.scss";

export type Props = {
  title: string;
};

export const Headline: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.headline}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};
