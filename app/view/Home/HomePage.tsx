import React, { Component, ReactNode } from "react";
import HomeContainer from "./HomeContainer";

export default class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div>
        <HomeContainer />
      </div>
    );
  }
}
