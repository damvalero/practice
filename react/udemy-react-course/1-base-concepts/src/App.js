import React, { Component } from "react";
import UserInput from "./views/UserInput";
import UserOutput from "./views/UserOutput";

import "./App.css";

class App extends Component {
  state = {
    username: "wise person",
  };

  inputChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="app">
        <p className="appParagraph">First Exercise</p>
        <UserInput
          changed={this.inputChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Winston Churchill" />
      </div>
    );
  }
}

export default App;
