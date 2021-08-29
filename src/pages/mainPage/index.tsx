import React, { useState } from "react";
import styles from "./index.module.scss";
import { useMediaQuery } from "react-responsive";
import smoothscroll from "smoothscroll-polyfill";

import { portfolioConfig } from "constants/config";

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

  const pageContents = [
    {
      title: "news",
      href: `#news`,
    },
    {
      title: "skills",
      href: `#skills`,
    },
    {
      title: "contacts",
      href: `#contacts`,
    },
  ]

  return (
    <div>
      <NavBar
        navBarTitle='Contents'
        contents={pageContents}
        disable={disableNavBar}
        closeNavBar={() => setDisableNavBar(true)}
      />
      <Header
        headerTitle={"yoshimok"}
        contents={pageContents}
        withMenu={isDesktopOrLaptop}
        clickHamburger={() => setDisableNavBar(false)}
      />
      <div className={styles.body}>
        <div className={styles.profile}>
          <AuthorProfile {...portfolioConfig.profile} />
        </div>
        <div className={styles.contents}>
          <Biography bioText={portfolioConfig.profile.biography} />
          <News contents={portfolioConfig.news} />
          <Skills contents={portfolioConfig.skills} />
          <Contacts {...portfolioConfig.contacts} />
        </div>
      </div>
      <Footer copyRight='© 2021 yoshimok' />
    </div>
  );
};
