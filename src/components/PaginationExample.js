import React, { useEffect, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  useRouteMatch
} from "react-router-dom";
import { PaginationChildRoute } from "../Routing/PaginationChildRoute";

const PaginationExample = (props) => {
  // console.log(props);
  // console.log("From Pagination");
  let { url, path } = useRouteMatch();
  let pages = [];
  const contentPerPage = 50;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalContent, setTotalContent] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const http = new XMLHttpRequest();
      http.open("Get", "https://jsonplaceholder.typicode.com/comments", true);
      http.onload = () => {
        props.loadContent(JSON.parse(http.response));
      };
      http.send();
    };
    loadData();
  }, []);

  const totalPages = Math.ceil(
    props.currentPage.pageReducer.pageContent.length / contentPerPage
  );
  const upperLimit = Math.ceil(
    props.currentPage.pageReducer.currentPage * contentPerPage
  );
  const lowerLimit = Math.ceil(upperLimit - contentPerPage);
  const currentContent = props.currentPage.pageReducer.pageContent.slice(
    lowerLimit,
    upperLimit
  );

  const changePage = (pageNumber) => {
    if (pageNumber <= totalPages && pageNumber >= 1) {
      props.changePage(pageNumber);
    }
  };

  for (let i = 1; i <= totalPages; i++) {
    pages = [...pages, i];
  }

  return (
    <div>
      <ul>
        {currentContent.map((content) => (
          <li key={content.id}>{content.name}</li>
        ))}
      </ul>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: "20px auto",
          width: "max-content"
        }}
      >
        <button
          onClick={() =>
            changePage(props.currentPage.pageReducer.currentPage - 1)
          }
        >
          <li>Prev</li>
        </button>
        {pages.map((page) => (
          <button
            onClick={() => changePage(page)}
            style={{
              padding: "10px",
              width: "50px",
              backgroundColor:
                page === props.currentPage.pageReducer.currentPage
                  ? "yellow"
                  : ""
            }}
            key={page}
          >
            <li key={page}>{page}</li>
          </button>
        ))}
        <button
          onClick={() =>
            changePage(props.currentPage.pageReducer.currentPage + 1)
          }
        >
          <li>Next</li>
        </button>
      </ul>
      <div>
        <Router>
          <NavLink to={`${url}/logOut`}>LogOut</NavLink>
          <PaginationChildRoute path={`${path}`} />
        </Router>
      </div>
      <div>Page ends</div>
    </div>
  );
};

export default PaginationExample;
