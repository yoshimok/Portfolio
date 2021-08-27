import React from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames";

import { Name } from "components/atoms/Name/Name";

import { IProfile } from "model/interfaces";

export type Props = {
  profile: IProfile;
  sideView?: boolean;
};

export const Profile: React.FC<Props> = ({ profile, sideView }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.centralize]: !sideView,
        [styles.containerSideView]: sideView,
      })}
    >
      <div className={styles.iconContainer}>
        <img
          className={classNames({
            [styles.iconImage]: !sideView,
            [styles.iconImageSideView]: sideView,
          })}
          src={profile.icon}
          alt='icon'
        />
      </div>
      <div className={styles.nameContainer}>
        <Name name={profile.name} position={profile.position} />
      </div>
    </div>
  );
};
