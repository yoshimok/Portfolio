import React, { useState } from "react";
import "./App.scss";
import styles from "./MainPage.module.scss";
import { useMediaQuery } from "react-responsive";
import smoothscroll from "smoothscroll-polyfill";

import * as data from "mydata/data";

import { Footer } from "components/organisms/Footer/Footer";
import { Header } from "components/organisms/Header/Header";
import { AuthorProfile } from "./sections/AuthorProfile/AuthorProfile";
import { Biography } from "./sections/Biography/Biography";
import { News } from "./sections/News/News";
import { Skills } from "./sections/Skills/Skills";
import { Contacts } from "./sections/Contacts/Contacts";
import { NavBar } from "../../components/organisms/NavBar/NavBar";

smoothscroll.polyfill();

export type Props = {};

export const MainPage: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  const [disableNavBar, setDisableNavBar] = useState(true);

  return (
    <div>
      <NavBar
        {...data.mockNavBarContents}
        disable={disableNavBar}
        closeNavBar={() => setDisableNavBar(true)}
      />
      <Header
        {...data.mockHeaderProps}
        withMenu={isDesktopOrLaptop}
        clickHamburger={() => setDisableNavBar(false)}
      />
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
