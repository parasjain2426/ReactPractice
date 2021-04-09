import React from "react";
import authManager from "../authManagement/authManager";

export const LogOut = (props) => {
  console.log(props);
  const logoutHandler = () => {
    // authManager.logout();
    window.location.reload();
  };
  if (authManager.isLogged) {
    return (
      <div>
        <button onClick={logoutHandler}>LogOut</button>
      </div>
    );
  } else {
    return <p>Made by Paras Jain</p>;
  }
};
