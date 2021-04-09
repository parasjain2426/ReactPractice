import { RoutingMap } from "./Routing/RoutingMap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <RoutingMap />
      </Router>
    </div>
  );
}

export default App;
