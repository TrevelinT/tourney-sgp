import React, { Component, ReactNode, Fragment } from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

interface Props {
  hasPlayers: boolean;
  reset(): void;
}

const base = css({
  maxWidth: "10em",
  margin: "0 auto",
});

export default class Form extends Component<Props> {
  render(): ReactNode {
    const { hasPlayers, reset } = this.props;
    return (
      <div css={base}>
        {hasPlayers ? (
          <Fragment>
            <p>
              Existem pontuações registradas previamente. Deseja continuar o
              torneio ou reiniciá-lo?
            </p>
            <button>
              <Link to="/match">Continuar Torneio</Link>
            </button>
            <button>
              <Link onClick={reset} to="/match">
                Reiniciar Torneio
              </Link>
            </button>
          </Fragment>
        ) : (
          <button>
            <Link to="/match">Iniciar Torneio</Link>
          </button>
        )}
      </div>
    );
  }
}
