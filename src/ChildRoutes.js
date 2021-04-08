import React from "react";
import { Switch, Route } from "react-router-dom";
import ParticularChart from "./components/ParticularChart";

export const ChildRoutes = () => {
  return (
    <Switch>
      <Route path="/charts/:topicsId" component={ParticularChart} />
    </Switch>
  );
};
