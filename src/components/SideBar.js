import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [style, setStyle] = useState(sideStyle);
  const [showContent, setShowContent] = useState(false);
  const openHandler = () => {
    setStyle({
      zIndex: 1,
      position: "absolute",
      width: "20%",
      height: "100%",
      backgroundColor: "black",
      color: "white"
    });
    setShowContent(true);
  };
  const closeHandler = () => {
    setStyle({
      zIndex: 1,
      position: "absolute",
      width: "0%",
      height: "100%",
      backgroundColor: "black",
      color: "white"
    });
    setShowContent(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <button style={openStyle} onClick={openHandler}>
        Open
      </button>
      <div style={style}>
        <div style={{ display: showContent ? "block" : "none" }}>
          <div style={{}}>
            <button
              onClick={closeHandler}
              style={{
                margin: "0px",
                padding: "5px",
                float: "left"
              }}
            >
              Close
            </button>
          </div>
          <div style={{ margin: "20px 0px", clear: "both" }}>
            <nav>
              <ul
                style={{
                  backgroundColor: "black",
                  padding: "10px"
                }}
              >
                <li>
                  <Link
                    to="/todoapp"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Todo App
                  </Link>
                </li>
                <li>
                  <Link
                    to="/charts"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Charts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pagination"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Paginate example
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
const openStyle = {
  textAlign: "left",
  margin: "0px",
  padding: "5px",
  width: "50px"
};
const sideStyle = {
  position: "absolute",
  width: "0%",
  height: "100%",
  backgroundColor: "black",
  color: "white",
  display: "flex"
};
