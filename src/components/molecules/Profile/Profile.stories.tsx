import React from "react";
import { Profile, Props } from "./Profile";

export default {
  title: "Component/Molecules/Profile",
  component: Profile,
};

const mockProps: Props = {
  profile: {
    name: "Tom",
    icon: "https://i.pravatar.cc/300",
    position: "Software Enfineer",
  },
};

const mockPropsSideView: Props = {
  profile: {
    name: "Tom",
    icon: "https://i.pravatar.cc/300",
    position: "Software Enfineer",
  },
  sideView: true,
};

export const Default = () => <Profile {...mockProps} />;
export const SideView = () => <Profile {...mockPropsSideView} />;
