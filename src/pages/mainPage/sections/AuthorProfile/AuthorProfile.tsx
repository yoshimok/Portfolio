import React from "react";
import styles from "./AuthorProfile.module.scss";

import { AuthorInformation } from "components/organisms/AuthorInformation/AuthorInformation";

import { IAuthorProfile } from "model/interfaces";

export type Props = {
  authorInfo: IAuthorProfile;
};

export const AuthorProfile: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <AuthorInformation
        profile={props.authorInfo.profile}
        urls={props.authorInfo.services}
      />
    </div>
  );
};
