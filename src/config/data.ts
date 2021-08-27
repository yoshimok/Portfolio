import githubLogo from "assets/icons/service/gitHub.svg";
import twitterLogo from "assets/icons/service/twitter.svg";
import codepenLogo from "assets/icons/service/codepen.svg";
import react from "assets/icons/service/react.svg";
import grafana from "assets/icons/service/grafana.svg";
import loki from "assets/icons/service/loki.svg";

import switchImage from "assets/imgs/switch.jpg";
import otogeImage from "assets/imgs/otoge.jpg";

export const portfolioConfig = {
  profile: {
    authorInfo: {
      profile: {
        name: "Maeda Yoshitaka",
        icon: "https://avatars0.githubusercontent.com/u/57283139?s=400&u=667cc4edcc61818d4bc39c0e44a3055789663446&v=4",
        position: "Engineer",
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
      ],
    },
    biography:
      "ITベンチャーでエンジニアしています。興味のある分野はたくさん。よろしくお願いします。",
  },
  news: [
    {
      title: "ポートフォリオ作成中...",
      body: "一年間サボりました。一体なにやってたんですかね。",
      datetime: "2021-08-30T11:39:00.000Z",
    },
    {
      title: "ポートフォリオ作成中！",
      body: "ポートフォリオ作ってみました。頑張ってつくるぞ！！！",
      datetime: "2020-07-19T10:39:35.725Z",
    },
    {
      title: "Switch買った",
      body: "友人と下北沢へ、今日はどんな古着に出会えるだろうかと思ったが、これといったものを見つけられず。仕方がないのでswitchを買った。",
      datetime: "2020-01-01T00:00:00.000Z",
      media: switchImage,
    },
    {
      title: "DAWN",
      body: "縦長画像 テキスト上",
      datetime: "2020-01-01T00:00:00.000Z",
      media: otogeImage,
      isTextFirst: true,
    },
    {
      title: "News Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis vulputate dui. Nulla vestibulum sapien ac massa pharetra rutrum. Pellentesque lacus sapien, efficitur in mattis at, hendrerit quis tortor. Cras ac auctor lacus. Aliquam non justo id purus dignissim mattis sed viverra metus. Phasellus quis facilisis arcu. Donec molestie tortor eu vestibulum porta. Aliquam feugiat felis turpis, facilisis porta turpis pharetra ut. Vivamus ante nunc, ullamcorper at ante porttitor, luctus commodo massa.",
      datetime: "2020-01-01T00:00:00.000Z",
    },
  ],
  skills: [
    {
      skill: {
        name: "React",
        logo: react,
      },
      body: "フロントエンド開発で一番お世話になってるやつです。",
      experience: "そこそこ",
      example: "ポートフォリオ、社内サービス開発(業務)",
    },
    {
      skill: {
        name: "Grafana",
        logo: grafana,
      },
      body: "クール。簡単にダッシュボードを作れるし、アラートの発報も比較的簡単に設定できる",
      experience: "少し",
      example: "社内開発プロダクトのサービス監視（業務）",
    },
    {
      skill: {
        name: "Grafana Loki",
        logo: loki,
      },
      body: "promtail likeなマルチテナントログ集約システム。導入がHelmで簡単にできることからKubernetesのロギングとかできる。",
      experience: "少し",
      example: "プロダクトのサービス監視（業務）",
    },
    {
      skill: {
        name: "AAAAAAAAAAAAAA",
      },
      body: "aaaaaaaaaaaaaaaaaaaaaa",
      experience: "少し",
      example: "プロダクトのサービス監視（業務）",
    },
  ],
  contacts: {
    mailAddress: "yoshimok.dev@gmail.com",
    twitterId: "@yoshimok__",
  },
};

export const mockProfile = {
  authorInfo: {
    profile: {
      name: "Maeda Yoshitaka",
      icon: "https://avatars0.githubusercontent.com/u/57283139?s=400&u=667cc4edcc61818d4bc39c0e44a3055789663446&v=4",
      position: "Engineer",
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
    ],
  },
  biography:
    "ITベンチャーでエンジニアしています。興味のある分野はたくさん。よろしくお願いします。",
};

export const mockNewsContetnts = {
  contents: [
    {
      title: "ポートフォリオ作成中...",
      body: "一年間サボりました。一体なにやってたんですかね。",
      datetime: "2021-08-30T11:39:00.000Z",
    },
    {
      title: "News Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis vulputate dui. Nulla vestibulum sapien ac massa pharetra rutrum. Pellentesque lacus sapien, efficitur in mattis at, hendrerit quis tortor. Cras ac auctor lacus. Aliquam non justo id purus dignissim mattis sed viverra metus. Phasellus quis facilisis arcu. Donec molestie tortor eu vestibulum porta. Aliquam feugiat felis turpis, facilisis porta turpis pharetra ut. Vivamus ante nunc, ullamcorper at ante porttitor, luctus commodo massa.",
      datetime: "2020-07-19T10:39:35.725Z",
    },
    {
      title: "ポートフォリオ作成中！",
      body: "ポートフォリオ作ってみました。頑張ってつくるぞ！！！",
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
      body: "フロントエンド開発で一番お世話になってるやつです。",
      experience: "1年～",
      example: "ポートフォリオ、社内サービス開発(業務)",
    },
    {
      skill: {
        name: "Grafana",
        logo: grafana,
      },
      body: "クール。簡単にダッシュボードを作れるし、アラートの発報も比較的簡単に設定できる",
      experience: "3か月~",
      example: "社内開発プロダクトのサービス監視（業務）",
    },
    {
      skill: {
        name: "Grafana Loki",
        logo: loki,
      },
      body: "promtail likeなマルチテナントログ集約システム。導入がHelmで簡単にできることからKubernetesのロギングを行う際には手軽に実装できる点で重宝される。",
      experience: "2か月~",
      example: "プロダクトのサービス監視（業務）",
    },
  ],
};

export const mockContacts = {
  mailAddress: "yoshimok.dev@gmail.com",
  twitterId: "@yoshimok__",
};
