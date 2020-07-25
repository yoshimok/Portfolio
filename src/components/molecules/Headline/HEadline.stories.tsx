import React from "react";
import { Headline, Props } from "./Headline";

export default {
  title: "Component/Molecules/Headline",
  component: Headline,
};

const mockProps: Props = {
  title: "Headline",
};

export const Default = () => <Headline {...mockProps} />;
