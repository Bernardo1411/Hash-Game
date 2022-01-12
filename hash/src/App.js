import React, { Component } from "react";

import Block from "./components/block";
import Header from "./components/header";
import Button from "./components/button";
import {
  stateNewContent,
  initializingState,
  isLineCompleted,
  isColumnCompleted,
  isMainDiagonalCompleted,
  isSecondaryDiagonalCompleted,
} from "./helpers/functionHelpers";

import "./App.css";

export default class Hash extends Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.restart = this.restart.bind(this);
  }

  state = {
    ...initializingState(),
  };

  changeState(id) {
    if (!this.state.end) {
      const { listBlocks, val } = stateNewContent(this.state, id);

      this.setState(
        {
          blocks: listBlocks,
        },
        this.endGame(this.state.blocks)
      );

      this.setState({ status: val.stato });
    }
  }

  endGame(actualState) {
    const actualStatetArray = actualState.map((block) => {
      return block.value;
    });

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

  restart() {
    this.setState({
      ...initializingState(),
    });
  }

  render() {
    return (
      <div className="hash">
        <Header
          className="header"
          name={this.state.status}
          end={this.state.end}
        />
        <Block name={this.state.blocks} click={this.changeState} />
        <Button className="button" click={this.restart} />
      </div>
    );
  }
}
