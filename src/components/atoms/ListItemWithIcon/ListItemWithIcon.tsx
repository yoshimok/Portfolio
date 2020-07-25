import React from "react";
import styles from "./ListItemWithIcon.module.scss";

export type Props = {
  icon: string;
  title: string;
  click: () => void;
};

export const ListItemWithIcon: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.itemIcon} src={props.icon} alt="itemiIcon" />
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};
