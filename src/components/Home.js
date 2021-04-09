import React from "react";
import { useHistory } from "react-router-dom";
import authManager from "../authManagement/authManager";

export const Home = (props) => {
  let { push } = useHistory();
  const loginHandler = () => {
    authManager.login();
    push("/todoapp");
  };
  return (
    <div>
      <h2>Hey! EveryOne</h2>
      <p>Please login to see the other apps waiting..!!</p>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
