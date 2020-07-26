import React, { useState } from "react";
import logo from "assets/icons/logo.svg";
import "./App.scss";

import { AuthorProfile } from "./sections/AuthorProfile/AuthorProfile";
import { Biography } from "./sections/Biography/Biography";

import githubLogo from "assets/icons/gitHub.svg";
import twitterLogo from "assets/icons/twitter.svg";
import codepenLogo from "assets/icons/codepen.svg";

export type Props = {};

const mockProfile = {
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
  biography:
    "自由気ままにITベンチャーでエンジニアしています。興味のある分野はたくさん。得意分野はアプリケーション開発です。よろしくお願いします。",
};

export const MainPage: React.FC<Props> = (props: Props) => {
  const [speed, setSpeed] = useState(20);

  const spinProperty = {
    animation: `App-logo-spin infinite ${speed}s linear`,
  };

  const up = () => {
    if (speed < 2) {
      setSpeed(speed - 0.05);

      return;
    }
    setSpeed(speed - 2);
  };

  const down = () => {
    setSpeed(speed + 2);
  };
  return (
    <div>
      <div id="profile">
        <AuthorProfile {...mockProfile} />
        <Biography bioText={mockProfile.biography} />
      </div>
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={spinProperty}
          />
          <div className={"button-group"}>
            <div className="button" onClick={up}>
              ↑
            </div>
            <div className="button" onClick={down}>
              ↓
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
