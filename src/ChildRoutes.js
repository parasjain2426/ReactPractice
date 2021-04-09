import React from "react";
import { Switch, Route } from "react-router-dom";
import ParticularChart from "./components/ParticularChart";

export const ChildRoutes = ({ path }) => {
  console.log(path);
  return (
    <Switch>
      <Route path={`${path}/:topicsId`} component={ParticularChart} />
    </Switch>
  );
};
