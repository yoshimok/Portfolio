import React from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames";

import { Name } from "components/atoms/Name/Name";

import { IProfile } from "model/interfaces";

export type Props = {
  profile: IProfile;
  sideView?: boolean;
};

export const Profile: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.centralize]: !props.sideView,
        [styles.containerSideView]: props.sideView,
      })}
    >
      {props.sideView}
      <div className={styles.iconContainer}>
        <img
          className={classNames({
            [styles.iconImage]: !props.sideView,
            [styles.iconImageSideView]: props.sideView,
          })}
          src={props.profile.icon}
          alt="icon"
        />
      </div>
      <Name {...props.profile} />
    </div>
  );
};
