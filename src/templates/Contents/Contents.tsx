import React, { ReactNode } from "react";
import styles from "./Contents.module.scss";

import { Headline } from "components/molecules/Headline/Headline";

export type Props = {
  headline: string;
  children: ReactNode;
};

export const Contents: React.FC<Props> = ({ headline, children }) => {
  return (
    <div id={headline.toLowerCase()} className={styles.container}>
      <Headline title={headline} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
