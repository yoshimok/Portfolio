import React from "react";
import { Header, Props } from "./Header";

export default {
  title: "Component/Header",
  component: Header,
};

const mockProps: Props = {
  headerTitle: "HeaderTitle",
  clickHamburger: () => {},
};

export const Default = () => <Header {...mockProps} />;
