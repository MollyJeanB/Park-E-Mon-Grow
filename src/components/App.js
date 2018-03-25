import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Temperature from "./temperature"
import MapContainer from "./map"

import Humidity from "./humidity"

var readingsStyle = {
    type: "row",
    backgroundColor: "#FFFFF",
    border: "2px solid",
    height: "200px",
    width: "auto"
};

var teamStyle = {
    type: "row",
    backgroundColor: "#2C97C1",
    border: "2px solid",
    height: "200px",
    width: "auto"
};

var mapStyle = {
    border: "2px solid",
    type: "row",
    height: "400px",
    width: "auto",
    alignSelf: "center"
}

var logoStyle = {
    width: "auto",
    height: "200px",
    type: "row"

}

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header" style={logoStyle}>
            <img
                src = {require("../images/Parkemon-01.png")}
                alt = "Missing Logo"
                className="img-responsive" />
        </header>
          <div style={teamStyle}>
              <p>Team Name:</p> //add team element
              <p>Team Points:</p> // add team points
          </div>
          <div style={readingsStyle}>
              <div class="col-md">
                  <Temperature />
              </div>
              <div class="col-md">
                  <Humidity />
              </div>
          </div>
          <div id={"map"} style={mapStyle}>
            <MapContainer />
          </div>
      </div>
    );
  }
}

export default App;
