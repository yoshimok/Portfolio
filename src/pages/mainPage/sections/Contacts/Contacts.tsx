import React from "react";
import styles from "./Contacts.module.scss";
import { useMediaQuery } from "react-responsive";
import mail from "assets/icons/letter.svg";
import twitter from "assets/icons/twitter.svg";

import { Contents } from "templates/Contents/Contents";
import { ListItemWithIcon } from "components/atoms/ListItemWithIcon/ListItemWithIcon";

export type Props = {
  mailAddress: string;
  twitterId: string;
};

export const Contacts: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  return (
    <Contents headline="Contacts">
      <div className={styles.container}>
        <ListItemWithIcon
          icon={mail}
          title={props.mailAddress}
          center={isDesktopOrLaptop ? false : true}
        />
        <ListItemWithIcon
          icon={twitter}
          title={props.twitterId}
          center={isDesktopOrLaptop ? false : true}
        />
      </div>
    </Contents>
  );
};
