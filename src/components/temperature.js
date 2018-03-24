import React, {Component} from
"react";

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://io.adafruit.com/api/v2/missyt/feeds/temperature/data", 
    {
        headers: {
            "content-type": "application/json",
            "X-AIO-Key": "fdf568b9190c4c01af03667d3d43fa0d"
        }
    })
    }

    render () {
        return <p>HI!</p>
    }
}

export default Temperature;