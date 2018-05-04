function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat:  6.217, lng: -75.567}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var barrio = results[0].address_components[1]['short_name']
      $('.barrio').text(barrio)
      console.log(barrio);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location

      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
