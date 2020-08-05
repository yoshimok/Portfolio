import React from "react";
import { NavBar, Props } from "./NavBar";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Organisms/NavBar",
  component: NavBar,
};

const mockProps: Props = {
  navBarTitle: "Contents",
  contents: [
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
  closeNavBar: () => {},
};

export const Default = () => <NavBar {...mockProps} />;
