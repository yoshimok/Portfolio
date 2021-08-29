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
