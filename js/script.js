function initMap() {
	
	var corporate = {
		info: '<strong>Premier Transportation Corporate</strong><br>\
					323 Cash Memorial Blvd., Forest Park, GA 30297<br />\
					<a href="https://goo.gl/maps/7p4HmJzuaKT2">Google Map</a>',
		lat: 33.607902, 
		long: -84.373024
	};


	var cnc = {
		info: '<strong>Charlotte, NC</strong><br />
					3606 N. Graham St., <br> Charlotte, NC 28206<br>
					<a href="https://goo.gl/maps/RYiCHCtVzFE2">Google Map</a>',
		lat: 35.265344, 
		long: -80.814594
		
	};

	var cma = {
		info: '<strong>Chicopee, MA</strong><br>
					26 Taxiway Dr.,<br> Chicopee, MA 01022<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 42.186341, 
		long: -72.550657
	};
	var ein = {
		info: '<strong>Evansville, IN</strong><br />
					201 North Congress Ave., <br> Evansville, IN 47715<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 37.979129, 
		long: -87.498036
	};
	var fva = {
		info: '<strong>Fishersville, VA/strong><br />
					249 Expo Road <br> Fishersville, VA 22939<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 38.086279, 
		long:-78.99956
	};
	var fky = {
		info: '<strong>Franklin, KY</strong><br>\r\
					4981 Nashville Rd., <br> Franklin, KY 42134<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 36.653857, 
		long: -86.555273
	};
	var gnc = {
		info: '<strong>Greensboro, NC</strong><br>\r\
					3121 S. Elm-Eugene St., <br> Greensboro, NC 27406<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 36.02448, 
		long: -79.789791
	};
	var gcoh = {
		info: '<strong>Grove City, OH</strong><br>\r\
					2135 Hardy Parkway <br> Grove City, OH 43123<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 39.914256, 
		long: -83.037942
	};
	var lwa = {
		info: '<strong>Lacey, WA</strong><br>\r\
					9050 Orion Drive NE <br>Lacey, WA 98516<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 47.076024, 
		long: -122.744692
	};
	var lfl = {
		info: '<strong>Lakeland, FL</strong><br>\r\
					4040 S. pipkin Rd., <br>Lakeland, FL 33811<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 27.9915, 
		long: -81.994317
	};
	var lpga = {
		info: '<strong>Lake Park, GA</strong><br>\r\
					6201 Peterson Rd.,<br>Lake Park, GA 31636<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 30.664177, 
		long: -83.19245
	};
	var mga = {
		info: '<strong>Macon, GA</strong><br>\r\
					151 Tractor Drive <br>Macon, GA 31216<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 32.727094, 
		long: -83.731416
	};
	var kil = {
		info: '<strong>Kankakee, IL</strong><br>\r\
					1405 Stanford Drive <br>Kankakee, IL 60901<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 41.137456, 
		long: -87.838322
	};
	var mmi = {
		info: '<strong>Monroe, MI</strong><br>\r\
					1800 Frenchtown Center Dr.<br>Monro, MI 48162<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 41.936085, 
		long: -83.356064
	};
	var mal = {
		info: '<strong>Montgomery, AL</strong><br>\r\
					125 6th St. <br>Montgomery, AL 36104<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 32.403032, 
		long: -86.311527
	};
	var ofl = {
		info: '<strong>Ocala, FL</strong><br>\r\
					5587 SW 1st Lane<br>Ocala, FL 34474<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 29.185817, 
		long: -82.212399
	};
	var pga = {
		info: '<strong>Pendergrass, GA</strong><br>\r\
					580 Raco Parkway<br>Pendergrass, GA 30567<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 34.196492, 
		long: -83.604669
	};
	var pin = {
		info: '<strong>Pendleton, IN</strong><br>\r\
					753 W Pioneer Trace<br>Pendleton,IN 46064<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 39.999412, 
		long: -85.797499
	};
	var upil = {
		info: '<strong>University Park, IL</strong><br>\r\
					2635 Federal Signal Dr.<br>University Park, IL 60484<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 41.447871, 
		long: -87.754498
	};
	var wnc = {
		info: '<strong>Wilson, NC</strong><br>\r\
					1819 Goldsboro St. SW<br>Wilson, NC 27893<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		lat: 35.70531, 
		long: -77.926119
	};
	var locations = [
      [corporate.info, corporate.lat, corporate.long, 0],
      [cnc.info, cnc.lat, cnc.long, 1],
      [cma.info, cma.lat, cma.long, 2],
	  [ein.info, ein.lat, ein.long, 3],
	  [fva.info, fva.lat, fav.long, 4],
	  [fky.info, fky.lat, fky.long, 5],
	  [gnc.info, gnc.lat, gnc.long, 6],
	  [gcoh.info, gcoh.lat, gcoh.long, 7],
	  [lwa.info, lwa.lat, lwa.long, 8],
	  [lfl.info, lfl.lat, lfl.long, 9],
	  [lga.info, lga.lat, lga.long, 10],
	  [mga.info, mga.lat, mga.long, 11],
	  [kil.info, kil.lat, kil.long, 12],
	  [mmi.info, mmi.lat, mmi.long, 13],
	  [mal.info, mal.lat, mal.long, 14],
	  [ofl.info, ofl.lat, ofl.long, 15],
	  [pga.info, pga.lat, pga.long, 16],
	  [pin.info, pin.lat, pin.long, 17],
	  [upil.info, upil.lat, upil.long, 18],
	  [wnc.info, wnc.lat, wnc.long, 19],	
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(33.607902, -84.373024),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}