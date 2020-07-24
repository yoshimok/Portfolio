import React from "react";
import { Header, Props } from "./Header";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Header",
  component: Header,
};

const mockProps: Props = {
  headerTitle: "HeaderTitle",
  clickHamburger: action("clickHamburger"),
};

export const Default = () => <Header {...mockProps} />;
