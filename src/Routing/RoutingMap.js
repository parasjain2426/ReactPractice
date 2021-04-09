import React from "react";
import { Switch, Route } from "react-router-dom";
import { Error } from "../components/Error";
import { Home } from "../components/Home";
import TodoContainer from "../components/TodoContainer";
import ChartContainer from "../containers/ChartContainer";
import PageContainer from "../containers/PageContainer";
import { SecuredRouter } from "./SecuredRouter";

export const RoutingMap = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <SecuredRouter path="/todoapp" component={TodoContainer} />
      <SecuredRouter path="/charts" component={ChartContainer} />
      <SecuredRouter path="/pagination" component={PageContainer} />
      <Route path="*" component={Error} />
    </Switch>
  );
};
