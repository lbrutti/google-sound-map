function initialize() {
  $('#map-canvas').css("width", window.innerWidth * 0.98);
  $('#map-canvas').css("height", window.innerHeight * 0.95);
  var myLatlng = new google.maps.LatLng(45.5620107, 12.237565);
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    disableDefaultUI: false
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">' +
  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174975661&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  '<div id="bodyContent">' +
  '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the ' +
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
  'south west of the nearest large town, Alice Springs; 450&#160;km ' +
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
  'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
  'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
  'Aboriginal people of the area. It has many springs, waterholes, ' +
  'rock caves and ancient paintings. Uluru is listed as a World ' +
  'Heritage Site.</p>' +
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
  '(last visited June 22, 2009).</p>' +
  '</div>' +
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  Tabletop.init({
    key: "1YhxYdrb3xnSwxC6RFu9OHu7lYdCc16YyLB_HT51KPZ4",
    callback: function(data, tabletop) {
      $.each(data, function(i,record){

        // Example standard marker
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(record.lat, record.lng),
          map: map,
          title: record.titolo,
          customData: {
            "autore": record.autore,
            "descrizione": record.descrizione,
            "luogo": record.luogo,
            "url": record.url,
            "immagine": record.immagine
          }
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      });
    },
    simpleSheet: true
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
