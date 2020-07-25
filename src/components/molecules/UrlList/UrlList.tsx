import React from "react";
import styles from "./UrlList.module.scss";

import { ListItemWithIcon } from "components/atoms/ListItemWithIcon/ListItemWithIcon";

interface urlInfo {
  accountName: string;
  serviceName: string;
  serviceIcon: string;
  url: string;
}

export type Props = {
  urls: urlInfo[];
  abridgement?: boolean;
};

const jumpTo = (url: string) => {
  window.open(url, "_blank");
};

const urlList = (infos: urlInfo[]): JSX.Element => {
  const listRender = () => {
    return infos.map((info, index) => {
      return (
        <a href={info.url}>
          <img
            className={styles.serviceLogo}
            src={info.serviceIcon}
            alt="serviceIcon"
          />
        </a>
      );
    });
  };

  return <div className={styles.list}>{listRender()}</div>;
};

const urlListWithDesc = (infos: urlInfo[]): JSX.Element => {
  const listRender = () => {
    return infos.map((info, index) => {
      return (
        <ListItemWithIcon
          title={info.accountName}
          icon={info.serviceIcon}
          click={() => jumpTo(info.url)}
        />
      );
    });
  };

  return <div className={styles.listDesc}>{listRender()}</div>;
};

export const UrlList: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.abridgement ? urlList(props.urls) : urlListWithDesc(props.urls)}
    </div>
  );
};
