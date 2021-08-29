import React from "react";
import styles from "./NavBar.module.scss";
import cross from "assets/icons/cross.svg";
import classNames from "classnames";

import { IHeaderMenuItem } from "types/interfaces";
import { NavBarMenu } from "../../molecules/NavBarMenu/NavBarMenu";

export type Props = {
  navBarTitle: string;
  contents: IHeaderMenuItem[];
  disable?: boolean;
  closeNavBar: () => void;
};

export const NavBar: React.FC<Props> = ({ navBarTitle, contents, disable, closeNavBar }) => {
  const jumpTo = (id: string) => {
    document.querySelector(id)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeNavBar();
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerClose]: disable,
        [styles.containerOpen]: !disable,
      })}
    >
      <div className={styles.navBarTitle}>
        {navBarTitle}
        <div className={styles.closeButton} onClick={closeNavBar}>
          <img className={styles.crossImg} src={cross} alt="cross" />
        </div>
      </div>
      <NavBarMenu menuItems={contents} click={jumpTo} />
    </div>
  );
};
