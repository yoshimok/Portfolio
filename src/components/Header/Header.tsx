import React from "react";
import styles from "./Header.module.scss";
import icon from "../../assets/icons/hamburger.svg";

export type Props = {
  headerTitle: string;
  clickHamburger: () => void;
};

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.hamburgerButton} onClick={props.clickHamburger}>
        <img className={styles.buttonImage} src={icon} alt="buttonIcon" />
      </div>
      <span className={styles.headerTitle}>{props.headerTitle}</span>
    </div>
  );
};
