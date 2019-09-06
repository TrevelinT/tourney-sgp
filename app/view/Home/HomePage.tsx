import React, { Component, ReactNode } from "react";
import { css } from "@emotion/core";

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

export default class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <h1 css={[base, hover]}>Hello World</h1>
      </div>
    );
  }
}
