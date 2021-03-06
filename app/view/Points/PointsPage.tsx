import React, { PureComponent, ReactNode } from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import PointsContainer from "./PointsContainer";

const button = css({
  display: "block",
  margin: "0 auto",
});

export default class Home extends PureComponent<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <PointsContainer />
        <button css={button}>
          <Link to="/match">Partidas</Link>
        </button>
      </div>
    );
  }
}
