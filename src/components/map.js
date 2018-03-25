import React, { Component } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
render() {

    return (
      <Map google={this.props.google}
          style={ {width: "900px",
          height: "490px"}

        }
          initialCenter={{
            lat: 45.5200937,
            lng:-122.6727816
          }}
          zoom={15}
          onClick={this.onMapClicked}>
        <Marker
          position={{lat: 45.5200937, lng:-122.6727816}}
          name={'Park Pin 1'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxnha2JmrxhiA5752WOxVz3L6TuwNIMOY"
})(MapContainer)
