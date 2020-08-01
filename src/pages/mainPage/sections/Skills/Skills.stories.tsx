import React from "react";
import { Skills, Props } from "./Skills";

import react from "assets/icons/react.svg";
import grafana from "assets/icons/grafana.svg";

export default {
  title: "Sections/Skills",
  component: Skills,
};

const mockProps: Props = {
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
      example: "受託サービス監視（業務）",
    },
  ],
};

export const Default = () => <Skills {...mockProps} />;
