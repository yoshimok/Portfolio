import React from "react";
import styles from "./NavBar.module.scss";
import cross from "assets/icons/cross.svg";

import { IHeaderMenuItem } from "model/interfaces";
import { NavBarMenu } from "../../molecules/NavBarMenu/NavBarMenu";

export type Props = {
  navBarTitle: string;
  contents: IHeaderMenuItem[];
  disable?: boolean;
  closeNavBar: () => void;
};

export const NavBar: React.FC<Props> = (props: Props) => {
  const jumpTo = (url: string) => {
    window.location.href = url;
    props.closeNavBar();
  };

  return (
    <>
      {props.disable ? (
        <div className={styles.close}></div>
      ) : (
        <div className={styles.container}>
          <div className={styles.navBarTitle}>
            {props.navBarTitle}
            <div className={styles.closeButton} onClick={props.closeNavBar}>
              <img className={styles.crossImg} src={cross} alt="cross" />
            </div>
          </div>
          <NavBarMenu menuItems={props.contents} click={jumpTo} />
        </div>
      )}
    </>
  );
};
