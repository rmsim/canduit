function initMap() {
   var uluru = {lat: 18.252, lng: -66.175};


   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 11,
     center: uluru,
     mapTypeId: 'terrain'
   });

   //Create an array of alphabetical characters used to label the markers.
   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   // Add some markers to the map.
   // Note: The code uses the JavaScript Array.prototype.map() method to
   // create an array of markers based on a given "locations" array.
   // The map() method here has nothing to do with the Google Maps API.
   var markers = locations.map(function(location, i) {
     return new google.maps.Marker({
       position: location,
       label: labels[i % labels.length]
     });
   });

   // Add a marker clusterer to manage the markers.
   var markerCluster = new MarkerClusterer(map, markers,
       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
 }

/*   //Add some markers to the map
   var marker = new google.maps.Marker({
     position: uluru,
     map: roadmap
   });
 } */

 // Create a <script> tag and set the USGS URL as the source.
 //  var script = document.createElement('script');

   // This example uses a local copy of the GeoJSON stored at
   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
 //  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
 //  document.getElementsByTagName('head')[0].appendChild(script);

 var locations = [
   {lat: 18.4703, lng: -66.4499},
   {lat: 18.4893, lng: -66.4116},
   {lat: 18.4888, lng: -66.4062},
   //Storm Tide Sensor
   {lat: 18.4889, lng: -66.4062},
   {lat: 18.4889, lng: -66.4059},
   {lat: 18.4887, lng: -66.3922},
   {lat: 18.4827, lng: -66.3385},
   {lat: 18.4719, lng: -66.2844},
   {lat: 18.4762, lng: -66.2773},
   {lat: 18.4761, lng: -66.2775},
   {lat: 18.4719, lng: -66.2844},
   {lat: 18.4762, lng: -66.2772},
   {lat: 18.4531, lng: -66.1767},
   {lat: 18.4556, lng: -66.1801},
   {lat: 18.4521, lng: -66.1587},
   {lat: 18.4640, lng: -66.1409},
   {lat: 18.4530, lng: -66.0437},
   {lat: 18.4531, lng: -66.0432},
   {lat: 18.4511, lng: -65.9956},
   {lat: 18.4513, lng: -65.9956},
   {lat: 18.4511, lng: -65.9958},
   {lat: 18.4504, lng: -65.9043},
   {lat: 18.4234, lng: -65.8296},
   {lat: 18.3459, lng: -65.6365}
 ]
