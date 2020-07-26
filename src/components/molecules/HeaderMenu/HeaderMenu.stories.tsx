import React from "react";
import { HeaderMenu, Props } from "./HeaderMenu";

export default {
  title: "Component/Molecules/HeaderMenu",
  component: HeaderMenu,
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
};

export const Default = () => <HeaderMenu {...mockProps} />;
