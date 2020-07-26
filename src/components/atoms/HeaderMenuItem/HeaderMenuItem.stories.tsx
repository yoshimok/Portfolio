import React from "react";
import { HeaderMenuItem, Props } from "./HeaderMenuItem";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Atoms/HeaderMenuItem",
  component: HeaderMenuItem,
};

const mockProps: Props = {
  title: "contents1",
  click: action("clickItem"),
};

export const Default = () => <HeaderMenuItem {...mockProps} />;
