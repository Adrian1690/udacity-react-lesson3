import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: ""
  };

  handleInput = ({ target }) => {
    this.setState((prevState) => ({
      input: target.value
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.input}
            onChange={this.handleInput}
          />
          <p className="echo">Echo:</p>
          <p>{this.state.input}</p>
        </div>
      </div>
    );
  }
}

export default App;
