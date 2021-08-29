import React from "react";
import styles from "./ListItemWithIcon.module.scss";

export type Props = {
  icon: string;
  title: string;
  click?: () => void;
  center?: boolean;
};

export const ListItemWithIcon: React.FC<Props> = ({ icon, title, click, center }) => {
  const listStyle = {
    cursor: click ? "pointer" : undefined,
    justifyContent: center ? "center" : "start",
  };
  return (
    <div className={styles.container} onClick={click} style={listStyle}>
      <img className={styles.itemIcon} src={icon} alt="itemiIcon" />
      <span className={styles.title}>{title}</span>
    </div>
  );
};
