import React, { Component } from "react";

import Block from "./components/block";
import Header from "./components/header";
import Button from "./components/button";
import {
  isLineCompleted,
  isColumnCompleted,
  isMainDiagonalCompleted,
  isSecondaryDiagonalCompleted,
} from "./helpers/resolveGameFunctions";
import { stateNewContent, initializingState } from "./helpers/functionHelpers";
import {
  playOnLine,
  playOnColumn,
  playOnMainDiagonal,
  playOnSecondaryDiagonal,
  playOnLineReverse,
  playOnColumnReverse,
  playOnSecondaryDiagonalReverse,
  isFullHash,
} from "./helpers/computerPlayFunctions";

import "./App.css";

export default class Hash extends Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.turnPlay = this.turnPlay.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    if (!this.state.status) this.computerPlay(this.state.blocks);
  }

  state = {
    ...initializingState(),
  };

  endGame(actualState) {
    const actualStatetArray = actualState.map((block) => block.value);

    let sum = 0;

    sum = isLineCompleted(actualStatetArray);
    if (sum === 2) return this.setState({ end: true });

    sum = isColumnCompleted(actualStatetArray);
    if (sum === 2) return this.setState({ end: true });

    sum = isMainDiagonalCompleted(actualStatetArray);
    if (sum === 2) return this.setState({ end: true });

    sum = isSecondaryDiagonalCompleted(actualStatetArray);
    if (sum === 2) return this.setState({ end: true });
  }

  async changeState(id) {
    if (!this.state.end) {
      const { listBlocks, val } = stateNewContent(this.state, id);

      this.setState(
        {
          blocks: listBlocks,
        },
        this.endGame(this.state.blocks)
      );
      return this.setState({ status: val.stato });
    }
  }

  computerPlay(actualState) {
    const actualStatetArray = actualState.map((block) => block.value);
    let computerPlayData = {};

    const sum = isFullHash(actualStatetArray);
    if (sum < 9) {
      computerPlayData = { ...playOnLine(actualStatetArray) };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      computerPlayData = { ...playOnLineReverse(actualStatetArray) };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      computerPlayData = { ...playOnColumn(actualStatetArray) };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      computerPlayData = { ...playOnColumnReverse(actualStatetArray) };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      computerPlayData = { ...playOnMainDiagonal(actualStatetArray) };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      computerPlayData = { ...playOnSecondaryDiagonal(actualStatetArray) };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      computerPlayData = {
        ...playOnSecondaryDiagonalReverse(actualStatetArray),
      };
      if (computerPlayData.sum === 1)
        return this.changeState(computerPlayData.emptySpotId);

      if (computerPlayData.sum < 1)
        return this.changeState(
          actualState.find((block) => block.value === "-").id
        );
    }
  }

  async turnPlay(id) {
    await this.changeState(id);

    setTimeout(() => this.computerPlay(this.state.blocks), 700);
  }

  restart() {
    this.setState(
      {
        ...initializingState(),
      },
      () => {
        !this.state.status && this.computerPlay(this.state.blocks);
      }
    );
  }

  render() {
    return (
      <div className="hash">
        <Header
          className="header"
          name={this.state.status}
          end={this.state.end}
        />
        <Block
          name={this.state.blocks}
          click={this.state.status ? this.turnPlay : () => {}}
        />
        <Button className="button" click={this.restart} />
      </div>
    );
  }
}
