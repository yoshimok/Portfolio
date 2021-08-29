import React from "react";
import styles from "./CardSkill.module.scss";

import { SubContents } from "components/atoms/SubContents/SubContents";

import { ISkill } from "types/interfaces";

export type Props = {
  skill: ISkill;
  body: string;
  experience: string;
  example: string;
};

export const CardSkill: React.FC<Props> = ({ skill, body, experience, example }) => {
  // todo: なんかいい感じにしたい scssと二重管理になってる気がしている
  const cardBackGround = {
    backgroundImage: `url(${skill.logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "rgba(255,255,255,0.75)",
    backgroundBlendMode: "lighten",
    backgroundSize: "contain",
    backgroundOrigin: "content-box",
  };

  return (
    <div
      className={styles.container}
      style={skill.logo ? cardBackGround : undefined}
    >
      <div className={styles.header}>
        <span className={styles.title}>{skill.name}</span>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
        <div className={styles.subContentsContainer}>
          <SubContents title={"経験年数"} >{experience}</SubContents>
          <SubContents title={"作成物"} >{example}</SubContents>
        </div>
      </div>
    </div >
  );
};
