import React, { Component, ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/HomePage";
import Points from "./Points/PointsPage";

class Router extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/points" exact component={Points} />
      </BrowserRouter>
    );
  }
}

export default Router;
