import React from "react";
import styles from "./NavBarMenu.module.scss";

import { NavBarMenuItem } from "components/atoms/NavBarMenuItem/NavBarMenuItem";

import { IHeaderMenuItem } from "types/interfaces";

export type Props = {
  menuItems: IHeaderMenuItem[];
  click: (href: string) => void;
};

export const NavBarMenu: React.FC<Props> = (props: Props) => {
  const menu = (menuItems: IHeaderMenuItem[]) => {
    return menuItems.map((item, index) => (
      <NavBarMenuItem
        title={item.title}
        click={() => {
          props.click(item.href);
        }}
      />
    ));
  };

  return <div className={styles.container}>{menu(props.menuItems)}</div>;
};
