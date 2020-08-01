import React from "react";
import styles from "./CardSkill.module.scss";

import { SubContents } from "components/atoms/SubContents/SubContents";

import { ISkill } from "model/interfaces";

export type Props = {
  skill: ISkill;
  body: string;
  experience: string;
  example: string;
};

export const CardSkill: React.FC<Props> = (props: Props) => {
  const cardBackGround = {
    backgroundImage: `url(${props.skill.logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundColor: "rgba(255,255,255,0.75)",
    backgroundBlendMode: "lighten",
    backgroundSize: "contain",
    backgroundOrigin: "content-box",
  };

  return (
    <div
      className={styles.container}
      style={props.skill.logo ? cardBackGround : undefined}
    >
      <div className={styles.header}>
        <span className={styles.title}>{props.skill.name}</span>
      </div>
      <div className={styles.body}>
        <p>{props.body}</p>
        <div className={styles.subContentsContainer}>
          <SubContents title={"経験年数"} body={props.experience} />
          <SubContents title={"作成物"} body={props.example} />
        </div>
      </div>
    </div>
  );
};
