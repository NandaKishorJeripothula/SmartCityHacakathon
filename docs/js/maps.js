    var count=0;
    var markerextra, locations = [
        ['Center Point',18.4340954, 79.1269655,-1,'jha','hfaskjfl'],
        ['Kaman A', 18.429803, 79.136131, 4,'dummy','dummy'],
        ['Kaman B',18.426495, 79.139715, 5,'dummy','dummy'],
        ['Kaman C', 18.430658, 79.137698, 3,'dummy','dummy'],
        ['RamNagar A', 18.442847, 79.106984, 2,'dummy','dummy'],
        ['RamNagar B', 18.4342847, 79.106344, 2,'dummy','dummy'],
        ['RamNagar C', 18.446647, 79.106944, 2,'dummy','dummy'],
        ['RamNagar D', 18.449947, 79.102384, 2,'dummy','dummy'],
        ['Court Circle A', 18.543547, 79.105484, 2,'dummy','dummy'],
        ['Court Circle B', 18.435847, 79.102384, 2,'dummy','dummy'],
        ['Court Circle C', 18.236847, 79.100984, 2,'dummy','dummy'],
    ];
      var map;
      var infowindow;
      function initMap() {
        var pyrmont = new google.maps.LatLng(18.4340954, 79.1269655);

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.textSearch({
          location: pyrmont,
          radius: 5000,
          type:['school'],
        }, callback);
      
        service.nearbySearch({
          location:pyrmont,
          radius:3000,
          type:['hospital']
        },callback);

        service.nearbySearch({
          location:pyrmont,
          radius:3000,
          type:['park']
        },callback);
      }
      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
          count+=results.length;
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            
          }
        }
      }
      function createMarker(place) {
        var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
          animation:google.maps.Animation.BOUNCE,
          icon:'google-pin.png',
          map: map,
          position: place.geometry.location
          });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
