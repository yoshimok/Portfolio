import React from "react";
import styles from "./CardNews.module.scss";

import { isoToDate } from "../../../common/timeHandler";

export type Props = {
  title: string;
  body: string;
  datetime: string;
  media?: string;
  isTextFirst?: boolean;
};

const mediaRender = (image: string) => {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={image} alt='newsImage' />
    </div>
  );
};

export const CardNews: React.FC<Props> = ({
  title,
  body,
  datetime,
  media,
  isTextFirst,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.postDate}>{isoToDate(datetime)}</div>
      {isTextFirst ? (
        <div className={styles.body}>
          <p>{body}</p>

          {media ? mediaRender(media) : null}
        </div>
      ) : (
        <div className={styles.body}>
          {media ? mediaRender(media) : null}
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};
