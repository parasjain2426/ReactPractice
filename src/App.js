import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { RoutingMap } from "./Routing/RoutingMap";

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
        <RoutingMap />
      </Router>
    </div>
  );
}

export default App;
