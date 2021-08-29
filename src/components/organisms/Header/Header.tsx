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

export const Header: React.FC<Props> = ({ headerTitle, clickHamburger, withMenu, contents }) => {
  return (
    <div
      className={classNames(styles.header, {
        [styles.withMenu]: withMenu,
        [styles.noMenu]: !withMenu,
      })}
    >
      {withMenu ? (
        <>
          <span
            className={styles.headerTitleWitMenu}
            onClick={() => scrotllToTop()}
          >
            {headerTitle}
          </span>
          <HeaderMenu menuItems={contents} />
        </>
      ) : (
        <>
          <span className={styles.headerTitle}>{headerTitle}</span>
          <div className={styles.hamburgerButton} onClick={clickHamburger}>
            <img className={styles.buttonImage} src={icon} alt="buttonIcon" />
          </div>
        </>
      )}
    </div>
  );
};
