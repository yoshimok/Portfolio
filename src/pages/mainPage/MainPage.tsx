import React, { useState } from "react";
import logo from "assets/icons/logo.svg";
import "./App.scss";
import styles from "./MainPage.module.scss";
import { useMediaQuery } from "react-responsive";

import * as data from "mydata/data";

import { Footer } from "../../components/organisms/Footer/Footer";
import { Header } from "components/organisms/Header/Header";
import { AuthorProfile } from "./sections/AuthorProfile/AuthorProfile";
import { Biography } from "./sections/Biography/Biography";
import { News } from "./sections/News/News";
import { Skills } from "./sections/Skills/Skills";
import { Contacts } from "./sections/Contacts/Contacts";

export type Props = {};

export const MainPage: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  return (
    <div>
      <Header {...data.mockHeaderProps} withMenu={isDesktopOrLaptop} />
      <div className={styles.body}>
        <div className={styles.profile}>
          <AuthorProfile {...data.mockProfile} />
        </div>
        <div className={styles.contents}>
          <Biography bioText={data.mockProfile.biography} />
          <News {...data.mockNewsContetnts} />
          <Skills {...data.mockSkillContents} />
          <Contacts {...data.mockContacts} />
        </div>
      </div>
      <Footer copyRight="© 2020 yoshimok" />
    </div>
  );
};
