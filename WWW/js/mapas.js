
function initialize() {
	var elCentro = new google.maps.LatLng(3.40912,-76.58046);
  	var mapOptions = {
    zoom: 5,
    center: elCentro
  };
	var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

//MARCADOR UBICADO EN EL CENTRO
//BUSCAR UNA FORMA DE MOSTRARLO CON EL PHP
   var marker = new google.maps.Marker({
      position: elCentro,
      map: map,
      title: 'Hablamelo!!'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
