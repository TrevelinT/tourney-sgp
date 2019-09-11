import React, { Component, ReactNode } from "react";
import { css } from "@emotion/core";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const button = css({
  display: "block",
  margin: "0 auto",
});

export default class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <FormContainer />
        <button css={button}>
          <Link to="/points">Pontuação</Link>
        </button>
      </div>
    );
  }
}
