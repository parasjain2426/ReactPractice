import React from "react";
import { Redirect, Route } from "react-router-dom";
import authManager from "./authManagement/authManager";

export const SecuredRouter = (props) => {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authManager.isLogged ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    ></Route>
  );
};
