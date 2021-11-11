import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
// import TodoApp from "./components/TodoApp";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Header}></Route>
      <Route path="/Resume" component={Resume}></Route>
      <Route exact path="/OtherProjects" component={Projects}></Route>
      {/* <Route exact path="/OtherProjects/TodoApp" component={TodoApp}></Route> */}
    </Switch>
  );
}

export default App;
