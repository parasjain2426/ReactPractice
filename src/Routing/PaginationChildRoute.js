import React from "react";
import { Switch, Route } from "react-router-dom";
import { LogOut } from "../components/LogOut";

export const PaginationChildRoute = ({ path }) => {
  console.log(path);
  return (
    <Switch>
      <Route path={`${path}/:option`} component={LogOut} />
    </Switch>
  );
};
