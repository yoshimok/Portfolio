import React from "react";
import styles from "./Header.module.scss";
import icon from "assets/icons/hamburger.svg";
import classNames from "classnames";
import { scrotllToTop } from "common/scrollToTop";

import { HeaderMenu } from "../../molecules/HeaderMenu/HeaderMenu";

import { IHeaderMenuItem } from "types/interfaces";

export type Props = {
  headerTitle: string;
  clickHamburger: () => void;
  withMenu?: boolean;
  contents: IHeaderMenuItem[];
};

export const Header: React.FC<Props> = (props: Props) => {
  const normal = () => {
    return (
      <>
        <span className={styles.headerTitle}>{props.headerTitle}</span>
        <div className={styles.hamburgerButton} onClick={props.clickHamburger}>
          <img className={styles.buttonImage} src={icon} alt="buttonIcon" />
        </div>
      </>
    );
  };

  const withMenu = () => {
    return (
      <>
        <span
          className={styles.headerTitleWitMenu}
          onClick={() => scrotllToTop()}
        >
          {props.headerTitle}
        </span>
        <HeaderMenu menuItems={props.contents} />
      </>
    );
  };

  return (
    <div
      className={classNames(styles.header, {
        [styles.withMenu]: props.withMenu,
        [styles.noMenu]: !props.withMenu,
      })}
    >
      {props.withMenu ? withMenu() : normal()}
    </div>
  );
};
