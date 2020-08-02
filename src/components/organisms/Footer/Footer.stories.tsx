import React from "react";
import { Footer, Props } from "./Footer";

export default {
  title: "Component/Organisms/Footer",
  component: Footer,
};

const mockProps: Props = {
  copyRight: "©2020 yoshimok",
};

export const Default = () => <Footer {...mockProps} />;
