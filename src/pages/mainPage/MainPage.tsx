import React, { useState } from "react";
import logo from "assets/icons/logo.svg";
import "./App.scss";
import styles from "./MainPage.module.scss";
import { useMediaQuery } from "react-responsive";

import * as data from "mydata/data";

import { AuthorProfile } from "./sections/AuthorProfile/AuthorProfile";
import { Biography } from "./sections/Biography/Biography";
import { Header } from "components/organisms/Header/Header";
import { News } from "./sections/News/News";
import { Skills } from "./sections/Skills/Skills";
import { Footer } from "../../components/organisms/Footer/Footer";

export type Props = {};

export const MainPage: React.FC<Props> = (props: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  const [speed, setSpeed] = useState(20);

  const spinProperty = {
    animation: `App-logo-spin infinite ${speed}s linear`,
  };

  const up = () => {
    if (speed <= 3) {
      if (speed - 0.1 <= 0) {
        alert("これ以上は無理！");
        return;
      }
      setSpeed(speed - 0.1);

      return;
    }
    setSpeed(speed - 2);
  };

  const down = () => {
    setSpeed(speed + 2);
  };

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
        </div>
      </div>
      <Footer copyRight="© 2020 yoshimok" />
      <div className="App">
        <header id="guruguru" className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={spinProperty}
          />
          <div className={"button-group"}>
            <div className="button" onClick={up}>
              ↑
            </div>
            <div className="button" onClick={down}>
              ↓
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
