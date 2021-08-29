import React from "react";
import styles from "./Skills.module.scss";

import { CardSkill } from "components/molecules/CardSkill/CardSkill";
import { Contents } from "templates/Contents/Contents";

import { ISkill } from "types/interfaces";

export type Props = {
  contents: {
    skill: ISkill;
    body: string;
    experience: string;
    example: string;
  }[];
};

export const Skills: React.FC<Props> = ({ contents }) => {
  return (
    <Contents headline='Skills'>
      {contents.map((content, index) => {
        return (
          <div className={styles.content} key={`skill contents-${index}`}>
            <CardSkill {...content} />
          </div>
        );
      })}
    </Contents>
  );
};
