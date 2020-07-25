import React from "react";
import { Headline, Props } from "./Headline";

export default {
  title: "Component/Headline",
  component: Headline,
};

const mockProps: Props = {
  title: "Headline",
};

export const Default = () => <Headline {...mockProps} />;
