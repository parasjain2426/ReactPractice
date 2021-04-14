import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authManager from "../authManagement/authManager";

export const Home = (props) => {
  let { push } = useHistory();
  let { notify } = useLocation();

  useEffect(() => {
    if (notify) {
      toast.dark("Please login to view apps", {
        position: "bottom-center",
        autoClose: 2000
      });
    }
  }, [notify]);

  const loginHandler = () => {
    authManager.login();
    push("/todoapp");
  };
  return (
    <div>
      <h2>Hey! EveryOne</h2>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
