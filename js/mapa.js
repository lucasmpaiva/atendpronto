var map;
var idInfoBoxAberto;
var infoBox = [];
var markers = [];

function initialize() {	
	var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
	
    var options = {
        zoom: 5,
		center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
}

initialize();

function abrirInfoBox(id, marker) {
	if (typeof(idInfoBoxAberto) == 'number' && typeof(infoBox[idInfoBoxAberto]) == 'object') {
		infoBox[idInfoBoxAberto].close();
	}

	infoBox[id].open(map, marker);
	idInfoBoxAberto = id;
}

function carregarPontos() {
	
	$.getJSON('hospitais.php', function(resultado) {

		var latlngbounds = new google.maps.LatLngBounds();
		
		$.each(resultado.hospitais, function(index, hospital) {

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(hospital.latitude, hospital.longitude),
				title: "AtendPronto localizou o centro de saúde mais próximo :D",
				icon: 'img/marcador.png'
			});
			
			var myOptions = {
				content: "<p>" + hospital.nome + "</p>",
				pixelOffset: new google.maps.Size(-150, 0)
        	};

			infoBox[hospital.id] = new InfoBox(myOptions);
			infoBox[hospital.id].marker = marker;
			
			infoBox[hospital.id].listener = google.maps.event.addListener(marker, 'click', function (e) {
				abrirInfoBox(hospital.id, marker);
			});
			
			markers.push(marker);
			
			latlngbounds.extend(marker.position);
			
		});
		
		var markerCluster = new MarkerClusterer(map, markers);
		
		map.fitBounds(latlngbounds);
		
	});
	
}

carregarPontos();