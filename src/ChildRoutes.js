import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ParticularChart from "./components/ParticularChart";

export const ChildRoutes = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/:topicsId`} component={ParticularChart} />
    </Switch>
  );
};
