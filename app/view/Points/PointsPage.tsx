import React, { Component, ReactNode } from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

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

const button = css({
  display: "block",
  margin: "0 auto",
});

export default class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <h1 css={[base, hover]}>Torneio SGP</h1>
        <h2 css={h2}>Pontuação</h2>
        <button css={button}>
          <Link to="/">Partidas</Link>
        </button>
      </div>
    );
  }
}
