function initMap() {
    let london = {lat: 51.5074, lng: -0.1278};
    let sh = {lat: 51.5045 ,lng: -0.0865};
    let mapDemo = document.getElementById("map");
  
    // this sets the default location for when the map is first loaded
    let map = new google.maps.Map(mapDemo, {
      zoom: 13,
      center: london
    });
  
    // these set different markers you want to show on your map
    let markersh = new google.maps.Marker({
      position: sh,
      map: map,
      title: 'The Hotel'
    });

  }