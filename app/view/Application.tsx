import { hot } from "react-hot-loader/root";
import React, { Component, ReactNode } from "react";
import { Helmet } from "react-helmet";
import Router from "./Router";

class App extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <Helmet>
          <title>React boilerplate with Typescript</title>
        </Helmet>
        <Router />
      </div>
    );
  }
}

export default hot(App);
