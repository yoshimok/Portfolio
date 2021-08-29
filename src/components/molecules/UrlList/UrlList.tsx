import React from "react";
import styles from "./UrlList.module.scss";

import { ListItemWithIcon } from "components/atoms/ListItemWithIcon/ListItemWithIcon";

import { IUrlInfo } from "types/interfaces";

export type Props = {
  urls: IUrlInfo[];
  abridgement?: boolean;
};

const jumpTo = (url: string) => {
  window.open(url, "_blank");
};

const urlList = (infos: IUrlInfo[]): JSX.Element => (
  <div className={styles.list}>
    {infos.map((info, index) =>
      <a href={info.url} target="_blank" rel="noopener noreferrer" key={index}>
        <img
          className={styles.serviceLogo}
          src={info.serviceIcon}
          alt="serviceIcon"
        />
      </a>
    )}
  </div>
)


const urlListWithDesc = (infos: IUrlInfo[]): JSX.Element => (
  <div className={styles.listDesc}>
    {infos.map((info, index) =>
      <ListItemWithIcon
        title={info.accountName}
        icon={info.serviceIcon}
        click={() => jumpTo(info.url)}
        key={index}
      />
    )}
  </div>)


export const UrlList: React.FC<Props> = ({ abridgement, urls }) => {
  return (
    <div className={styles.container}>
      {abridgement ? urlList(urls) : urlListWithDesc(urls)}
    </div>
  );
};
