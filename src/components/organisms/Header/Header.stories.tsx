import React from "react";
import { Header, Props } from "./Header";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component/Organisms/Header",
  component: Header,
};

const mockProps: Props = {
  headerTitle: "HeaderTitle",
  clickHamburger: action("clickHamburger"),
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
};

export const Default = () => <Header {...mockProps} />;
export const WithMenu = () => <Header {...mockProps} withMenu />;
