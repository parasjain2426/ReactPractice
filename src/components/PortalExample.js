import React from "react";
import ReactDOM from "react-dom";

const PortalExample = () => {
  const style = {
    textAlign: "center",
    margin: "0px",
    backgroundColor: "black",
    color: "white"
  };
  return ReactDOM.createPortal(
    <h1 style={style}>Welcome to the app!</h1>,
    document.getElementById("root")
  );
};

export default PortalExample;
