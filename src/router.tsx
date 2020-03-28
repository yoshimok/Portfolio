import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          // <Route exact path="/" component={mainPage} /> 
        }
      </Switch>
    </BrowserRouter>
  );
};
