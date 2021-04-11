import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { $ } from "react-jquery-plugin";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export const SideBar = () => {
  useEffect(() => {
    $(document).ready(() => {
      // alert("It is check");
      //here jquery can work
    });
  }, []);
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
    setStyle(sideStyle);
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
        <FaAngleRight />
      </button>
      <div style={style}>
        <div style={{ display: showContent ? "block" : "none" }}>
          <div style={{}}>
            <button
              onClick={closeHandler}
              style={{
                float: "left"
              }}
            >
              <FaAngleLeft />
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
  margin: "2px 15px"
};
const sideStyle = {
  position: "absolute",
  width: "2%",
  height: "100%",
  backgroundColor: "black",
  color: "white",
  display: "flex"
};
