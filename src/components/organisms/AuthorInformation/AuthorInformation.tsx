import React from "react";
import styles from "./AuthorInformation.module.scss";
import classNames from "classnames";

import { Profile } from "../../molecules/Profile/Profile";
import { UrlList } from "../../molecules/UrlList/UrlList";

interface Profile {
  name: string;
  icon: string;
  position: string;
}

interface urlInfo {
  accountName: string;
  serviceName: string;
  serviceIcon: string;
  url: string;
}

export type Props = {
  profile: Profile;
  sideView?: boolean;
  urls: urlInfo[];
};

export const AuthorInformation: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={classNames({
        [styles.container]: !props.sideView,
        [styles.containerSideView]: props.sideView,
      })}
    >
      <Profile {...props} />
      <UrlList urls={props.urls} abridgement={!props.sideView} />
    </div>
  );
};
