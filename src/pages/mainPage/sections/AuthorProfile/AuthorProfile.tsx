import React from "react";
import styles from "./AuthorProfile.module.scss";
import { useMediaQuery } from "react-responsive";

import { AuthorInformation } from "components/organisms/AuthorInformation/AuthorInformation";

import { IAuthorProfile } from "types/interfaces";

export type Props = {
  authorInfo: IAuthorProfile;
};

export const AuthorProfile: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  return (
    <div className={styles.container}>
      <AuthorInformation
        profile={props.authorInfo.profile}
        urls={props.authorInfo.services}
        sideView={isDesktopOrLaptop}
      />
    </div>
  );
};
