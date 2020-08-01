import React from "react";
import styles from "./News.module.scss";

import { CardNews } from "components/molecules/CardNews/CardNews";
import { Contents } from "templates/Contents/Contents";

interface INewsContents {
  title: string;
  datetime: string;
  body: string;
  media?: string;
}

export type Props = {
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
  return <Contents headline="News">{newsRender(props.contents)}</Contents>;
};
