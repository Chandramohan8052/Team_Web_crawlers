import "./App.css";
import Helmet from "react-helmet";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.jsx";
import Sessions from "./components/Sessions/Sessions.jsx";
import Music from "./components/Player/Music.js";
import Result from "./components/Result/Result.jsx";

import Test from "./components/Test/Test.jsx";
import HealthIssues from "./components/HealthIssues/HealthIssues.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  
  return (
    <Fragment>
      <Helmet title="Mind Doc" />
      <Navbar />
      <Router>
        <Route exact path="/mentalissues" component={HealthIssues} />
        <Route exact path="/test/:type" component={Test} />
        <Route exact path="/result/:type/:result" component={Result} />
        <Route
          exact
          path="/music"
          component={Music}
        />
        <Route exact path="/sessions" component={Sessions} />
        <Route exact path="/" component={Home} />
      </Router>
    </Fragment>
  );
}

export default App;
