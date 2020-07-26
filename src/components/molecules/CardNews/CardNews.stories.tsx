import React from "react";
import { CardNews, Props } from "./CardNews";

export default {
  title: "Component/Molecules/CardNews",
  component: CardNews,
};

const mockProps: Props = {
  title: "News Title",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis vulputate dui. Nulla vestibulum sapien ac massa pharetra rutrum. Pellentesque lacus sapien, efficitur in mattis at, hendrerit quis tortor. Cras ac auctor lacus. Aliquam non justo id purus dignissim mattis sed viverra metus. Phasellus quis facilisis arcu. Donec molestie tortor eu vestibulum porta. Aliquam feugiat felis turpis, facilisis porta turpis pharetra ut. Vivamus ante nunc, ullamcorper at ante porttitor, luctus commodo massa.",
  datetime: "2020-07-19T10:39:35.725Z",
};

const mockPropsHaveMedia: Props = {
  title: "News Title",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis vulputate dui. Nulla vestibulum sapien ac massa pharetra rutrum. Pellentesque lacus sapien, efficitur in mattis at, hendrerit quis tortor. Cras ac auctor lacus. Aliquam non justo id purus dignissim mattis sed viverra metus. Phasellus quis facilisis arcu. Donec molestie tortor eu vestibulum porta. Aliquam feugiat felis turpis, facilisis porta turpis pharetra ut. Vivamus ante nunc, ullamcorper at ante porttitor, luctus commodo massa.",
  datetime: "2020-07-19T10:39:35.725Z",
  media: "https://picsum.photos/500/300",
};

export const Default = () => <CardNews {...mockProps} />;
export const WithMedia = () => <CardNews {...mockPropsHaveMedia} />;
