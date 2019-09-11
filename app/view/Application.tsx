import { hot } from "react-hot-loader/root";
import React, { Component, ReactNode } from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import Router from "./Router";

const base = css({
  textAlign: "center",
  fontSize: "24px",
  lineHeight: "1.5",
  color: "darkblue",
});

const hover = css({
  ":hover": {
    color: "blue",
  },
});

const h2 = css({
  textAlign: "center",
  fontSize: "21px",
  lineHeight: "1.5",
});

class App extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <Helmet>
          <title>Torneio SGP</title>
        </Helmet>
        <h1 css={[base, hover]}>Torneio SGP</h1>
        <h2 css={h2}>Friendlies</h2>
        <Router />
      </div>
    );
  }
}

export default hot(App);
