import React, { Component } from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import { ChildRoutes } from "../ChildRoutes";

class ChartPrac extends Component {
  componentDidMount() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"],
      datasets: [
        {
          label: "Money increase in 2021",
          data: [3, 2, 5, 6, 7, 4]
        },
        {
          label: "Money decrease in 2021",
          data: [10, 5, 7, 2, 3, 1]
        }
      ]
    };
    this.props.showChart(data);
    // this.setState({
    //     chartData:data
    // })
  }
  render() {
    const { url, path } = this.props.match;
    console.log(url);
    return (
      <div
        style={{
          margin: "0px auto",
          width: "50%"
        }}
      >
        <Router>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px"
            }}
          >
            <li>
              {/* <Link to={`${url}/Bar`}>Bar Graph</Link> */}
              <Link
                to={{
                  pathname: `${url}/Bar`,
                  data: this.props.chartData.chartReducer
                }}
              >
                Bar Graph
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/Line`,
                  data: this.props.chartData.chartReducer
                }}
              >
                Line Graph
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/Pie`,
                  data: this.props.chartData.chartReducer
                }}
              >
                Pie Chart
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${url}/Doughnut`,
                  data: this.props.chartData.chartReducer
                }}
              >
                Doughnut Graph
              </Link>
            </li>
          </ul>
          <ChildRoutes path={path} />
        </Router>
      </div>
    );
  }
}

export default withRouter(ChartPrac);
