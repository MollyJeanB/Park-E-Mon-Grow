import React, { Component } from "react";

class Humidity extends Component {
  constructor(props) {
    super(props);
    this.state = {
    humidity: "",
    error: null
    };
  }

  componentDidMount() {
    fetch("https://io.adafruit.com/api/v2/missyt/feeds/humidity/data", {
      headers: {
        "content-type": "application/json",
        "X-AIO-Key": "fdf568b9190c4c01af03667d3d43fa0d"
      }
    }).then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json()
    }).
    then(data => this.setState({
      humidity: data[0].value
    })
  ).catch(err => {
    this.setSate({
      error: "Could not load humidity",
    })
  })
  }

  render() {

 let humidityVal = Math.floor(parseInt(this.state.humidity)) ? Math.floor(parseInt(this.state.humidity)) : this.state.humidity

  if (this.state.humidity === "nan" || this.state.humidity === NaN ) {
     humidityVal = "No data available at this time"
  } else if (typeof parseInt(this.state.humidity) === "number") {
  humidityVal = Math.floor(this.state.humidity) + '%'
} else if (typeof this.state.humidity === "string"){  humidityVal = this.state.humidity }
      return (
          <div id={"humid"} class={"col-md"}>
            <p>
              <h5>Humidity:</h5> {humidityVal}
            </p>
          </div>
      );
  }
}

export default Humidity;
