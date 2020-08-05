import githubLogo from "assets/icons/gitHub.svg";
import twitterLogo from "assets/icons/twitter.svg";
import codepenLogo from "assets/icons/codepen.svg";
import react from "assets/icons/react.svg";
import grafana from "assets/icons/grafana.svg";
import loki from "assets/icons/loki.svg";

export const mockProfile = {
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

export const mockHeaderProps = {
  headerTitle: "Yoshimok",
  clickHamburger: () => {},
  contents: [
    {
      title: "news",
      href: `${window.location.origin}/#news`,
    },
    {
      title: "skills",
      href: `${window.location.origin}/#skills`,
    },
    {
      title: "contacts",
      href: `${window.location.origin}/#contacts`,
    },
  ],
};

export const mockNewsContetnts = {
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

export const mockSkillContents = {
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

export const mockContacts = {
  mailAddress: "yoshimok@pompom.com",
  twitterId: "@yoshimok__",
};

export const mockNavBarContents = {
  navBarTitle: "Contents",
  contents: [
    {
      title: "news",
      href: `${window.location.origin}/#news`,
    },
    {
      title: "skills",
      href: `${window.location.origin}/#skills`,
    },
    {
      title: "contacts",
      href: `${window.location.origin}/#contacts`,
    },
  ],
};
