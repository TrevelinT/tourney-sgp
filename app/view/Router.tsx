import React, { Component, ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/HomePage";

class Router extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    );
  }
}

export default Router;
