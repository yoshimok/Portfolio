import React from "react";
import { UrlList, Props } from "./UrlList";
import githubLogo from "assets/icons/gitHub.svg";
import twitterLogo from "assets/icons/twitter.svg";
import codepenLogo from "assets/icons/codepen.svg";

export default {
  title: "Component/UrlList",
  component: UrlList,
};

const mockPropsThreeContents: Props = {
  urls: [
    {
      accountName: "yoshimok",
      serviceName: "GitHub",
      serviceIcon: githubLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
    {
      accountName: "yoshimok",
      serviceName: "Twitter",
      serviceIcon: twitterLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
    {
      accountName: "yoshimok",
      serviceName: "Codepen",
      serviceIcon: codepenLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
  ],
  abridgement: true,
};

const mockPropsFiveContents: Props = {
  urls: [
    {
      accountName: "yoshimok",
      serviceName: "GitHub",
      serviceIcon: githubLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
    {
      accountName: "yoshimok",
      serviceName: "GitHub",
      serviceIcon: githubLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
    {
      accountName: "yoshimok",
      serviceName: "GitHub",
      serviceIcon: githubLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
    {
      accountName: "yoshimok",
      serviceName: "GitHub",
      serviceIcon: githubLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
    {
      accountName: "yoshimok",
      serviceName: "GitHub",
      serviceIcon: githubLogo,
      url: "https://github.com/yoshimok/Portfolio",
    },
  ],
  abridgement: true,
};

const mockWithDesc: Props = {
  urls: [
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
  abridgement: false,
};

export const ThreeContents = () => <UrlList {...mockPropsThreeContents} />;
export const FiveContents = () => <UrlList {...mockPropsFiveContents} />;
export const WithDescription = () => <UrlList {...mockWithDesc} />;
