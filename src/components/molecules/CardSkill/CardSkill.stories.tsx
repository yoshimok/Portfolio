import React from "react";
import { CardSkill, Props } from "./CardSkill";
import logo from "assets/icons/logo.svg";

export default {
  title: "Component/Molecules/CardSkill",
  component: CardSkill,
};

const mockProps: Props = {
  skill: {
    name: "React",
    logo: logo,
  },
  body:
    "フロントエンド開発で一番お世話になってる。主にReact + TypeScript(tsx)を使用しています。Reduxは若干苦手。。",
  experience: "1年～",
  example: "ポートフォリオ、社内通貨サービス開発(業務)",
};

export const Default = () => <CardSkill {...mockProps} />;
