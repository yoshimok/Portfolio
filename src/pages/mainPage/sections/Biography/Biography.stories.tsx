import React from "react";
import { Biography, Props } from "./Biography";

export default {
  title: "Sections/Biography",
  component: Biography,
};

const mockProps: Props = {
  bioText:
    "自由気ままにITベンチャーでエンジニアしています。興味のある分野はたくさん。得意分野はアプリケーション開発です。よろしくお願いします。",
};

export const Default = () => <Biography {...mockProps} />;
