import React from "react";
import { ListItemWithIcon, Props } from "./ListItemWithIcon";
import githubLogo from "assets/icons/gitHub.svg";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Atoms/ListItemWithIcon",
  component: ListItemWithIcon,
};

const mockProps: Props = {
  icon: githubLogo,
  title: "yoshimok",
  click: action("clickItem"),
};

export const Default = () => <ListItemWithIcon {...mockProps} />;
