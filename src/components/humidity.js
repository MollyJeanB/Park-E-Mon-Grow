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

    const humidityVal = Math.floor(parseInt(this.state.humidity)) ? Math.floor(parseInt(this.state.humidity)) : this.state.humidity

    return (<p>{humidityVal}%</p>);
  }
}

export default Humidity;
