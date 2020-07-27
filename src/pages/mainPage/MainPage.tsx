import React, { useState } from "react";
import logo from "assets/icons/logo.svg";
import "./App.scss";
import styles from "./MainPage.module.scss";

import githubLogo from "assets/icons/gitHub.svg";
import twitterLogo from "assets/icons/twitter.svg";
import codepenLogo from "assets/icons/codepen.svg";

import { AuthorProfile } from "./sections/AuthorProfile/AuthorProfile";
import { Biography } from "./sections/Biography/Biography";
import { Header } from "components/organisms/Header/Header";
import { News } from "./sections/News/News";

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
        url: "https://github.com/yoshimok",
      },
      {
        accountName: "@yoshimok__",
        serviceName: "Twitter",
        serviceIcon: twitterLogo,
        url: "https://twitter.com/yoshimok__",
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

const mockHeaderProps = {
  headerTitle: "HeaderTitle",
  clickHamburger: () => {},
  contents: [
    {
      title: "contents1",
      href: "http://localhost:3001#profile",
    },
    {
      title: "contents2",
      href: "http://localhost:3001#guruguru",
    },
    {
      title: "contents3",
      href: "http://localhost9009",
    },
  ],
};

const mockNewsContetnts = {
  headline: "News Title",
  contents: [
    {
      title: "ポートフォリオ作成中！",
      body:
        "作ると言い続けてなかなか作成していなかったポートフォリオですが、今頑張ってつくっています。公開したらたくさんの人に見てほしいなあ。１０人か？５０人か？１００人か？？ いや１００人はないと思うな... いや５０人はあるかもしれへんわ。流石に０人ってことはないと思うな",
      datetime: "2020-07-19T10:39:35.725Z",
    },
    {
      title: "News Title",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis vulputate dui. Nulla vestibulum sapien ac massa pharetra rutrum. Pellentesque lacus sapien, efficitur in mattis at, hendrerit quis tortor. Cras ac auctor lacus. Aliquam non justo id purus dignissim mattis sed viverra metus. Phasellus quis facilisis arcu. Donec molestie tortor eu vestibulum porta. Aliquam feugiat felis turpis, facilisis porta turpis pharetra ut. Vivamus ante nunc, ullamcorper at ante porttitor, luctus commodo massa.",
      datetime: "2020-07-19T10:39:35.725Z",
    },
  ],
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
      <Header {...mockHeaderProps} />
      <div className={styles.body}>
        <div className={styles.profile}>
          <AuthorProfile {...mockProfile} />
        </div>
        <div className={styles.contents}>
          <Biography bioText={mockProfile.biography} />
          <News {...mockNewsContetnts} />
        </div>
      </div>
      <div className="App">
        <header id="guruguru" className="App-header">
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
