import React, { useState } from "react";
import logo from "assets/icons/logo.svg";
import "./App.scss";
import styles from "./MainPage.module.scss";
import { useMediaQuery } from "react-responsive";

import githubLogo from "assets/icons/gitHub.svg";
import twitterLogo from "assets/icons/twitter.svg";
import codepenLogo from "assets/icons/codepen.svg";
import react from "assets/icons/react.svg";
import grafana from "assets/icons/grafana.svg";
import loki from "assets/icons/loki.svg";

import { AuthorProfile } from "./sections/AuthorProfile/AuthorProfile";
import { Biography } from "./sections/Biography/Biography";
import { Header } from "components/organisms/Header/Header";
import { News } from "./sections/News/News";
import { Skills } from "./sections/Skills/Skills";
import { Footer } from "../../components/organisms/Footer/Footer";

export type Props = {};

const mockProfile = {
  authorInfo: {
    profile: {
      name: "Maeda Yoshitaka",
      icon:
        "https://avatars0.githubusercontent.com/u/57283139?s=400&u=667cc4edcc61818d4bc39c0e44a3055789663446&v=4",
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
  headerTitle: "Yoshimok",
  clickHamburger: () => {},
  contents: [
    {
      title: "contents1",
      href: "http://localhost:3001#profile",
    },
    {
      title: "news",
      href: "http://localhost:3001#news",
    },
    {
      title: "react fan",
      href: "http://localhost:3001#guruguru",
    },
  ],
};

const mockNewsContetnts = {
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

const mockSkillContents = {
  contents: [
    {
      skill: {
        name: "React",
        logo: react,
      },
      body:
        "フロントエンド開発で一番お世話になってる。主にReact + TypeScript(tsx)を使用しています。Reduxは若干苦手。。",
      experience: "1年～",
      example: "ポートフォリオ、社内通貨サービス開発(業務)",
    },
    {
      skill: {
        name: "Grafana",
        logo: grafana,
      },
      body:
        "クール。簡単にダッシュボードを作れるし、アラートの発報も比較的簡単に設定できる",
      experience: "3か月~",
      example: "社内開発プロダクトのサービス監視（業務）",
    },
    {
      skill: {
        name: "Grafana Loki",
        logo: loki,
      },
      body:
        "promtail likeなマルチテナントログ集約システム。導入がHelmで簡単にできることからKubernetesのロギングを行う際には手軽に実装できる点で重宝される。データのアナライズの点に関してはElasticに軍配があがるが、Lokiはまだ若いのでこれからに期待ですね",
      experience: "2か月~",
      example: "社内開発プロダクトのサービス監視（業務）",
    },
  ],
};

export const MainPage: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  const [speed, setSpeed] = useState(20);

  const spinProperty = {
    animation: `App-logo-spin infinite ${speed}s linear`,
  };

  const up = () => {
    if (speed <= 3) {
      if (speed - 0.1 <= 0) {
        alert("これ以上は無理！");
        return;
      }
      setSpeed(speed - 0.1);

      return;
    }
    setSpeed(speed - 2);
  };

  const down = () => {
    setSpeed(speed + 2);
  };

  return (
    <div>
      <Header {...mockHeaderProps} withMenu={isDesktopOrLaptop} />
      <div className={styles.body}>
        <div className={styles.profile}>
          <AuthorProfile {...mockProfile} />
        </div>
        <div className={styles.contents}>
          <Biography bioText={mockProfile.biography} />
          <News {...mockNewsContetnts} />
          <Skills {...mockSkillContents} />
        </div>
      </div>
      <Footer copyRight="© 2020 yoshimok" />
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
