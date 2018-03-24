function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 45.5200937, lng:-122.6727816}
  });
  var marker = new google.maps.Marker({
    position: {lat: 45.5200937, lng:-122.6727816},
    map: map
  });
}
