import React from "react";
import styles from "./Skills.module.scss";

import { CardSkill } from "components/molecules/CardSkill/CardSkill";
import { Contents } from "templates/Contents/Contents";

import { ISkill } from "model/interfaces";

interface ISkillContents {
  skill: ISkill;
  body: string;
  experience: string;
  example: string;
}

export type Props = {
  contents?: ISkillContents[];
};

const skillsRender = (contents?: ISkillContents[]) => {
  return contents ? (
    contents.map((content, index) => {
      console.log(content.example);
      return (
        <div className={styles.content} key={`skill contents-${index}`}>
          <CardSkill {...content} />
        </div>
      );
    })
  ) : (
    <></>
  );
};

export const Skills: React.FC<Props> = (props: Props) => {
  return <Contents headline="Skills">{skillsRender(props.contents)}</Contents>;
};
