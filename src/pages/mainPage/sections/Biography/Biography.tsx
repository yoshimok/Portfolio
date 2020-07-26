import React from "react";
import styles from "./Biography.module.scss";

export type Props = {
  bioText: string;
};

export const Biography: React.FC<Props> = (props: Props) => {
  return (
    <div id="bio" className={styles.bio}>
      <p>{props.bioText}</p>
    </div>
  );
};
