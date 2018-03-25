import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Temperature from "./temperature"
import MapContainer from "./map"
import Humidity from "./humidity"

var readingsStyle = {
    className: "row",
    border: "1px solid",
    height: "200px",
    width: "auto",
    backgroundColor: "#FFFFFF",

};

var tempStyle = {
    className: "col-md-6"
}

var humidStyle = {
    className: "col-md-6"
}

var teamStyle = {
    className: "row",
    paddingLeft: "35%",
    backgroundColor: "#FFFFFF",
    border: "1px solid",
    height: "200px",
    width: "auto",
    borderRadius: "25px 25px 0px 0px",
    border: "1px solid"
};

var mapStyle = {
    className: "row",
    paddingLeft: "15%",
    paddingTop: "2%",
    paddingBottom: "2%",
    height: "550px",
    width: "auto",
    borderRadius: "0px 0px 25px 25px",
    border: "1px solid "
}

var logoStyle = {
    width: "auto",
    height: "300px",
    className: "row"

}

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header" style={logoStyle}>
            <img
                src = {require("../images/parkemon-01.png")}
                alt = "Missing Logo"
                className="img-responsive"
                height = "250px"/>
        </header>
          <div style={teamStyle}>
              <div className={"col-md-6"}>
                  <h4>Team Name:</h4> <h5>Columbia Slough Watershed Counsel</h5>
              </div>

              <div className={"col-md-6"}>
                  <h4>Team Points: 11</h4>
              </div>

          </div>
          <div style={readingsStyle}>
              <div style={tempStyle} >
                  <Temperature  />
              </div>
              <div style={humidStyle} >
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
