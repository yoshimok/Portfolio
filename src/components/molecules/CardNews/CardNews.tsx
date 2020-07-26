import React from "react";
import styles from "./CardNews.module.scss";

import { isoToDate } from "../../../common/timeHandler";

export type Props = {
  title: string;
  body: string;
  datetime: string;
  media?: string;
};

const mediaRender = (image: string) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={image} alt="newsImage" />
    </div>
  );
};

export const CardNews: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{props.title}</span>
      </div>
      <div className={styles.postDate}>{isoToDate(props.datetime)}</div>
      <div className={styles.body}>
        <p>{props.body}</p>
        {props.media ? mediaRender(props.media) : null}
      </div>
    </div>
  );
};
