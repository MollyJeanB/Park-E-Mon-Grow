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

var tempStyle = {
    type: "col-md-8"
}

var humidStyle = {
    type: "col-md-8"
}

var teamStyle = {
    class: "row",
    backgroundColor: "#ABACA6",
    border: "1px solid",
    height: "200px",
    width: "auto"
};

var mapStyle = {
    border: "2px solid",
    class: "row",
    paddingLeft: "8%",
    paddingTop: "2%",
    paddingBottom: "2%",
    height: "550px",
    width: "auto",
}

var logoStyle = {
    width: "auto",
    height: "300px",
    type: "row",
    backgroundColor:"#504040"

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
              <div class="col-md-8"><p>Team Name:</p> //add team element</div>
              <div class="col-md-8"><p>Team Points:</p> // add team points</div>
          </div>
          <div style={readingsStyle}>
              <div class="col-md-8" >
                  <Temperature style={tempStyle} />
              </div>
              <div class="col-md-8" >
                  <Humidity style={humidStyle}/>
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
