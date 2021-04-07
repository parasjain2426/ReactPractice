import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import ChartContainer from "./containers/ChartContainer";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
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
        <Switch>
          <Route path="/todoapp">
            <TodoContainer />
          </Route>
          <Route path="/charts">
            <ChartContainer />
          </Route>
          <Route path="/pagination">
            <PageContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
