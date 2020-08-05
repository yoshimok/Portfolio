import React from "react";
import { NavBarMenuItem, Props } from "./NavBarMenuItem";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Atoms/NavBarMenuItem",
  component: NavBarMenuItem,
};

const mockProps: Props = {
  title: "contents1",
  click: action("clickItem"),
};

export const Default = () => <NavBarMenuItem {...mockProps} />;
