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

export const NavBar: React.FC<Props> = (props: Props) => {
  const jumpTo = (id: string) => {
    document.querySelector(id)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    props.closeNavBar();
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerClose]: props.disable,
        [styles.containerOpen]: !props.disable,
      })}
    >
      <div className={styles.navBarTitle}>
        {props.navBarTitle}
        <div className={styles.closeButton} onClick={props.closeNavBar}>
          <img className={styles.crossImg} src={cross} alt="cross" />
        </div>
      </div>
      <NavBarMenu menuItems={props.contents} click={jumpTo} />
    </div>
  );
};
