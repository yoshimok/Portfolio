import React from "react";
import { AuthorProfile, Props } from "./AuthorProfile";
import githubLogo from "assets/icons/gitHub.svg";
import twitterLogo from "assets/icons/twitter.svg";
import codepenLogo from "assets/icons/codepen.svg";

export default {
  title: "Sections/AuthorProfile",
  component: AuthorProfile,
};

const mockProps: Props = {
  authorInfo: {
    profile: {
      name: "Tom",
      icon: "https://i.pravatar.cc/300",
      position: "Software Enfineer",
    },
    services: [
      {
        accountName: "yoshimok",
        serviceName: "GitHub",
        serviceIcon: githubLogo,
        url: "https://github.com/yoshimok/Portfolio",
      },
      {
        accountName: "@yoshimok__",
        serviceName: "Twitter",
        serviceIcon: twitterLogo,
        url: "https://github.com/yoshimok/Portfolio",
      },
      {
        accountName: "@yoshimok",
        serviceName: "Codepen",
        serviceIcon: codepenLogo,
        url: "https://github.com/yoshimok/Portfolio",
      },
    ],
  },
};

export const Default = () => <AuthorProfile {...mockProps} />;
