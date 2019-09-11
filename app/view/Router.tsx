import React, { Component, ReactNode } from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home/HomePage";
import Points from "./Points/PointsPage";

class Router extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <HashRouter basename="/">
        <Route path="/" exact component={Home} />
        <Route path="/points" exact component={Points} />
      </HashRouter>
    );
  }
}

export default Router;
