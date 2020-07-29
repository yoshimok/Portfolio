import React, { ReactNode } from "react";
import styles from "./Contents.module.scss";

import { Headline } from "components/molecules/Headline/Headline";

export type Props = {
  headline: string;
  children: ReactNode;
};

export const Contents: React.FC<Props> = (props: Props) => {
  return (
    <div id={props.headline.toLowerCase()} className={styles.container}>
      <Headline title={props.headline} />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
