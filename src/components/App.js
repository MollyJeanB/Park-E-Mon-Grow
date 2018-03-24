import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Temperature from "./temperature"

import Humidity from "./humidity"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Park E-Mon Grow</h1>
        </header>
        <Temperature />

        <Humidity />

      </div>
    );
  }
}

export default App;
