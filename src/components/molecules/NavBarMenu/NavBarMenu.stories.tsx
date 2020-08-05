import React from "react";
import { NavBarMenu, Props } from "./NavBarMenu";

export default {
  title: "Component/Molecules/NavBarMenu",
  component: NavBarMenu,
};

const mockProps: Props = {
  menuItems: [
    {
      title: "contents1",
      href: "http://localhost9009",
    },
    {
      title: "contents2",
      href: "http://localhost9009",
    },
    {
      title: "contents3",
      href: "http://localhost9009",
    },
  ],
  click: () => {},
};

export const Default = () => <NavBarMenu {...mockProps} />;
