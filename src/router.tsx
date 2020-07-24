import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./pages/mainPage/App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};
