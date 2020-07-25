import React from "react";
import styles from "./UrlList.module.scss";

import { ListItemWithIcon } from "components/atoms/ListItemWithIcon/ListItemWithIcon";

import { IUrlInfo } from "model/interfaces";

export type Props = {
  urls: IUrlInfo[];
  abridgement?: boolean;
};

const jumpTo = (url: string) => {
  window.open(url, "_blank");
};

const urlList = (infos: IUrlInfo[]): JSX.Element => {
  const listRender = () => {
    return infos.map((info, index) => {
      return (
        <a href={info.url} target="_blank" rel="noopener noreferrer">
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

const urlListWithDesc = (infos: IUrlInfo[]): JSX.Element => {
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
