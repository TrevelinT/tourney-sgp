import React, { Component, ReactNode, FormEvent } from "react";
import { css } from "@emotion/core";
import { Match } from "domain/match";

interface FormProps {
  onSubmit(match: Match): void;
}

interface FormState {
  [key: string]: string;
  firstPlace: string;
  secondPlace: string;
  thirdPlace: string;
  fourthPlace: string;
}

const formBase = css({
  maxWidth: "10em",
  margin: "0 auto",
});

export default class Form extends Component<FormProps, FormState> {
  state = {
    firstPlace: "",
    secondPlace: "",
    thirdPlace: "",
    fourthPlace: "",
  };

  handleInputChange = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event: FormEvent): void => {
    const { onSubmit } = this.props;
    const { firstPlace, secondPlace, thirdPlace, fourthPlace } = this.state;
    event.preventDefault();
    onSubmit({
      firstPlace: parseInt(firstPlace, 10),
      secondPlace: parseInt(secondPlace, 10),
      thirdPlace: parseInt(thirdPlace, 10),
      fourthPlace: parseInt(fourthPlace, 10),
    });
  };

  render(): ReactNode {
    const { firstPlace, secondPlace, thirdPlace, fourthPlace } = this.state;
    return (
      <form css={formBase} onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Colocação da partida</legend>
          <ul>
            <li>
              <label htmlFor="firstPlace">Primeiro colocado:</label>
              <input
                type="tel"
                id="firstPlace"
                name="firstPlace"
                value={firstPlace}
                onChange={this.handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="secondPlace">Segundo colocado:</label>
              <input
                type="tel"
                id="secondPlace"
                name="secondPlace"
                value={secondPlace}
                onChange={this.handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="thirdPlace">Terceiro colocado:</label>
              <input
                type="tel"
                id="thirdPlace"
                name="thirdPlace"
                value={thirdPlace}
                onChange={this.handleInputChange}
              />
            </li>
            <li>
              <label htmlFor="fourthPlace">Quarto colocado:</label>
              <input
                type="tel"
                id="fourthPlace"
                name="fourthPlace"
                value={fourthPlace}
                onChange={this.handleInputChange}
              />
            </li>
          </ul>
          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    );
  }
}
