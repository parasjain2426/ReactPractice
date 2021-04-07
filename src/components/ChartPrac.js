import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import ParticularChart from "./ParticularChart";

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
    console.log(this.props);
    const { url, path } = this.props.match;
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
              <Link to={`${url}/Bar`}>Bar Graph</Link>
            </li>
            <li>
              <Link to={`${url}/Line`}>Line Graph</Link>
            </li>
            <li>
              <Link to={`${url}/Pie`}>Pie Chart</Link>
            </li>
            <li>
              <Link to={`${url}/Doughnut`}>Doughnut Graph</Link>
            </li>
          </ul>
          <Switch>
            <Route path={`${path}/:topicId`}>
              <ParticularChart data={this.props.chartData.chartReducer} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(ChartPrac);
