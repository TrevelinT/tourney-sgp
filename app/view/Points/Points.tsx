import React, { PureComponent, ReactNode } from "react";
import { css } from "@emotion/core";
import { Player } from "domain/player";

interface PointsProps {
  players: Player[];
}

const text = css({
  textAlign: "center",
});

export default class Home extends PureComponent<PointsProps, {}> {
  render(): ReactNode {
    const { players } = this.props;
    return players.length ? (
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <p>Número: {player.id}</p>
            <p>Pontos: {player.points}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p css={text}>Não já jogadores para mostrar a pontuação</p>
    );
  }
}
