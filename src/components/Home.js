import React from "react";
import authManager from "../authManagement/authManager";

export const Home = (props) => {
  const loginHandler = () => {
    authManager.login();
    props.history.push("/todoapp");
  };
  return (
    <div>
      <h2>Welcome to the app!</h2>
      <p>Please login to see the other apps waiting..!!</p>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
