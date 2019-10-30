import React, { Component } from "react";
import "./App.css";

import ListPeople from "./Views/ListPeople";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ListPeople />
      </div>
    );
  }
}
