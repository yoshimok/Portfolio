import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/global.scss";
import * as serviceWorker from "./serviceWorker";
import { MainPage } from "./pages/MainPage";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
