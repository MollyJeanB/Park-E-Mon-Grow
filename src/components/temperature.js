import React, {Component} from
"react";

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "",
            error: null
        }
    }

    componentDidMount() {
        fetch("https://io.adafruit.com/api/v2/missyt/feeds/temp/data",
    {
        headers: {
            "content-type": "application/json",
            "X-AIO-Key": "fdf568b9190c4c01af03667d3d43fa0d"
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(data =>
            this.setState({
                temperature: data[0].value
            })
        ).catch(error => {
            this.setState({
                error: 'Could not load board'
            })
        })
    }

    render () {

        const temperatureVal = Math.floor(parseInt(this.state.temperature)) ? Math.floor(parseInt(this.state.temperature)) + '°' : this.state.temperature

        return  (
            <p><h4>Temperature:</h4>{temperatureVal}</p>
        );
    }
}

export default Temperature;
