import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Error } from "../components/Error";
import { Home } from "../components/Home";
import TodoContainer from "../components/TodoContainer";
import ChartContainer from "../containers/ChartContainer";
import PageContainer from "../containers/PageContainer";
import { SecuredRouter } from "./SecuredRouter";
import { TodoAppLoader } from "../lazyLoaders/TodoAppLoader";
import { ChartsLoader } from "../lazyLoaders/ChartsLoader";
import { PaginationLoader } from "../lazyLoaders/PaginationLoader";

export const RoutingMap = () => {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/" component={Home} />
        <SecuredRouter path="/todoapp" component={TodoAppLoader} />
        <SecuredRouter path="/charts" component={ChartsLoader} />
        <SecuredRouter path="/pagination" component={PaginationLoader} />
        <Route path="*" component={Error} />
      </Switch>
    </Suspense>
  );
};
