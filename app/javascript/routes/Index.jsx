import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewRoute from "../components/routes/new_route";

export default (
  <Router>
    <Switch>
      <Route path="/map" exact component={NewRoute} />
    </Switch>
  </Router>
);