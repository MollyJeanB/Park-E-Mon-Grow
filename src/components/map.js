import React, { Component } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
render() {

    return (
      <Map google={this.props.google}
          style={ {width: "500px",
          height: "300px"}

        }
          initialCenter={{
            lat: 45.5200937,
            lng:-122.6727816
          }}
          zoom={15}
          onClick={this.onMapClicked}>



        <Marker
position={{lat: 45.5200937,
lng:-122.6727816}
}
          // onClick={this.onMarkerClick}
                name={'Park Pin 1'} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxnha2JmrxhiA5752WOxVz3L6TuwNIMOY"
})(MapContainer)

// class Map extends Component {
//   function initMap() {
//   var puppet = {lat: 45.5200937, lng:-122.6727816};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: puppet
//   });
//   var marker = new google.maps.Marker({
//     position: puppet,
//     map: map
//   });
// }
// fetch('https://io.adafruit.com/api/v2/missyt/feeds/humidity/data?limit=2') // Call the fetch function passing the url of the API as a parameter
// .then(data=>data = data.json()).then(data => console.log(data))
//
// .catch(function() {
//   console.log('we fucked up!')
//     // This is where you run code if the server returns any errors
// });
// return() {
//   render(
//     <body>
//   <h3>Map Demo</h3>
//   <div id="map"></div>
//   <script src="./map.js">
//   </script>
//   <script async defer
//   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxnha2JmrxhiA5752WOxVz3L6TuwNIMOY&callback=initMap">
//   </script>
// </body>
//   )
// }
//
// }
//
// export default Map;
