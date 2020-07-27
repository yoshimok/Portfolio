import React from "react";
import styles from "./News.module.scss";

import { Headline } from "components/molecules/Headline/Headline";
import { CardNews } from "components/molecules/CardNews/CardNews";

interface INewsContents {
  title: string;
  datetime: string;
  body: string;
  media?: string;
}

export type Props = {
  headline: string;
  contents?: INewsContents[];
};

const newsRender = (contents?: INewsContents[]) => {
  return contents ? (
    contents.map((content, index) => {
      return (
        <div className={styles.content}>
          <CardNews {...content} />
        </div>
      );
    })
  ) : (
    <></>
  );
};

export const News: React.FC<Props> = (props: Props) => {
  return (
    <div id="news" className={styles.container}>
      <Headline title={props.headline} />
      {newsRender(props.contents)}
    </div>
  );
};
