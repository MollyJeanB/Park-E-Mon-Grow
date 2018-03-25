var marker;
function initMap() {
  var puppet = {lat: 45.5200937, lng:-122.6727816};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: puppet
  });
  marker = new google.maps.Marker({
    position: puppet,
    map: map
  });
}


fetch('https://io.adafruit.com/api/v2/missyt/feeds/humidity/data?limit=2') // Call the fetch function passing the url of the API as a parameter
.then(data=>data = data.json()).then(data =>{

})

.catch(function() {
  console.log('we fucked up!')
    // This is where you run code if the server returns any errors
});
