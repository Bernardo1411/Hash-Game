import React, { Component } from "react";

import Block from "./components/block";
import Header from "./components/header";
import Button from "./components/button";
import { stateNewContent, initializingState } from "./helpers/functionHelpers";

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

    for (let i = 0; i < 7; i += 3) {
      sum = 0;
      for (let j = i + 1; j < i + 3; j++) {
        if (
          actualStatetArray[i] === actualStatetArray[j] &&
          actualStatetArray[i] !== "-"
        ) {
          ++sum;
          if (sum === 2) {
            this.setState({ end: true });
            return;
          }
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      sum = 0;
      for (let j = 3 + i; j < i + 7; j += 3) {
        if (
          actualStatetArray[i] === actualStatetArray[j] &&
          actualStatetArray[i] !== "-"
        ) {
          ++sum;
          if (sum === 2) {
            this.setState({ end: true });
            return;
          }
        }
      }
    }
    sum = 0;
    for (let j = 4; j < 9; j += 4) {
      if (
        actualStatetArray[0] === actualStatetArray[j] &&
        actualStatetArray[0] !== "-"
      ) {
        ++sum;
        if (sum === 2) {
          this.setState({ end: true });
          return;
        }
      }
    }
    sum = 0;
    for (let j = 4; j < 7; j += 2) {
      if (
        actualStatetArray[2] === actualStatetArray[j] &&
        actualStatetArray[2] !== "-"
      ) {
        ++sum;
        if (sum === 2) {
          this.setState({ end: true });
          return;
        }
      }
    }
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
