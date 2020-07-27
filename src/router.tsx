import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/mainPage/MainPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};
