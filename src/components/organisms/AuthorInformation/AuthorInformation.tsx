import React from "react";
import styles from "./AuthorInformation.module.scss";
import classNames from "classnames";

import { Profile } from "../../molecules/Profile/Profile";
import { UrlList } from "../../molecules/UrlList/UrlList";

import { IProfile, IUrlInfo } from "types/interfaces";

export type Props = {
  profile: IProfile;
  sideView?: boolean;
  urls: IUrlInfo[];
};

export const AuthorInformation: React.FC<Props> = ({ profile, sideView, urls }) => {
  return (
    <div
      className={classNames({
        [styles.container]: !sideView,
        [styles.containerSideView]: sideView,
      })}
    >
      <Profile profile={profile} />
      <UrlList urls={urls} abridgement={!sideView} />
    </div>
  );
};
