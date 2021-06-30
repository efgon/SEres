import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Header}></Route>
      <Route path="/Resume" component={Resume}></Route>
      <Route path="/OtherProjects" component={Projects}></Route>
    </React.Fragment>
  );
}

export default App;
