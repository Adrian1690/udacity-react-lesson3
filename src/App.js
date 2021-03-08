import React, { Component } from "react";
import logo from "./logo.svg";
import Game from "./Game";
import "./App.css";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    value1: value1,
    value2: value2,
    value3: value3,
    proposedAnswer: proposedAnswer,
    numQuestions: numQuestions,
    numCorrect: numCorrect
  };

  evaluate = (answer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const evaluation = value1 + value2 + value3 === proposedAnswer;

    const isCorrect = answer === evaluation;

    const newValue1 = Math.floor(Math.random() * 100);
    const newValue2 = Math.floor(Math.random() * 100);
    const newValue3 = Math.floor(Math.random() * 100);
    const newProposedAnswer =
      Math.floor(Math.random() * 3) + newValue1 + newValue2 + newValue3;

    this.setState((prevState) => ({
      value1: newValue1,
      value2: newValue2,
      value3: newValue3,
      proposedAnswer: newProposedAnswer,
      numQuestions: prevState.numQuestions + 1,
      numCorrect: isCorrect ? prevState.numCorrect + 1 : prevState.numCorrect
    }));
  };

  render() {
    const {
      value1,
      value2,
      value3,
      proposedAnswer,
      numCorrect,
      numQuestions
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game data={this.state} evaluate={this.evaluate} />
      </div>
    );
  }
}

export default App;
