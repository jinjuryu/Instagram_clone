import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Up from  "./components/Upload";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/upload" component={Up} />
          
        </Switch>
      </Router>
    );
  }
}