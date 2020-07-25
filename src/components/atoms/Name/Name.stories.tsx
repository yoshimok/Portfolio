import React from "react";
import { Name, Props } from "./Name";

export default {
  title: "Component/Atoms/Name",
  component: Name,
};

const mockProps: Props = {
  name: "name",
  position: "God Hoge Fuga",
};

export const Default = () => <Name {...mockProps} />;
