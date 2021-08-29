import React from "react";
import styles from "./NavBarMenu.module.scss";

import { NavBarMenuItem } from "components/atoms/NavBarMenuItem/NavBarMenuItem";

import { IHeaderMenuItem } from "types/interfaces";

export type Props = {
  menuItems: IHeaderMenuItem[];
  click: (href: string) => void;
};

export const NavBarMenu: React.FC<Props> = ({ menuItems, click }) => {

  return (
    <div className={styles.container}>{menuItems.map((item, index) => (
      <NavBarMenuItem
        title={item.title}
        click={() => {
          click(item.href);
        }}
        key={item.title}
      />
    ))}</div>)
};
