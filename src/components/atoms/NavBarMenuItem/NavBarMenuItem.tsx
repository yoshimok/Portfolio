import React from "react";
import styles from "./NavBarMenuItem.module.scss";

export type Props = {
  title: string;
  click: () => void;
};

export const NavBarMenuItem: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container} onClick={props.click}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};
