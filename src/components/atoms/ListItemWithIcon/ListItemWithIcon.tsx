import React from "react";
import styles from "./ListItemWithIcon.module.scss";

export type Props = {
  icon: string;
  title: string;
  click?: () => void;
  center?: boolean;
};

export const ListItemWithIcon: React.FC<Props> = (props: Props) => {
  const listStyle = {
    cursor: props.click ? "pointer" : undefined,
    justifyContent: props.center ? "center" : "start",
  };
  return (
    <div className={styles.container} onClick={props.click} style={listStyle}>
      <img className={styles.itemIcon} src={props.icon} alt="itemiIcon" />
      <span className={styles.title}>{props.title}</span>
    </div>
  );
};
