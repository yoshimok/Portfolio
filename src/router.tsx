import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/mainPage/App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};
