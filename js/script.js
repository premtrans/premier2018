function initMap() {
	var corporate = {
		info: '<strong>Premier Transportation Corporate</strong><br>\
					323 Cash Memorial Blvd., Forest Park, GA 30297<br>\
					<a href=https://goo.gl/maps/7p4HmJzuaKT2">View in Google Maps</a>',
	};

	var bct = {
		info: '<strong>Bloomfield, CT</strong><br>\
					129 W. Dudley Town Rd,<br> Bloomfield, CT 06002<br>\
					<a href="https://goo.gl/maps/GNoL7t1u7r92">View in Google Maps</a>',
	};

	var cnc = {
		info: '<strong>Charlotte, NC</strong><br>\
					3606 N. Graham St., <br> Charlotte, NC 28206<br>\
					<a href="https://goo.gl/maps/RYiCHCtVzFE2">Get Directions</a>',
		
	};

	var cma = {
		info: '<strong>Chicopee, MA</strong><br>\r\
					26 Taxiway Dr.,<br> Chicopee, MA 01022<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var ein = {
		info: '<strong>Evansville, IN</strong><br>\r\
					201 North Congress Ave., <br> Evansville, IN 47715<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var fva = {
		info: '<strong>Fishersville, VA/strong><br>\r\
					249 Expo Road <br> Fishersville, VA 22939<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var cky = {
		info: '<strong>Franklin, KY</strong><br>\r\
					4981 Nashville Rd., <br> Franklin, KY 42134<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var gnc = {
		info: '<strong>Greensboro, NC</strong><br>\r\
					3121 S. Elm-Eugene St., <br> Greensboro, NC 27406<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var gcoh = {
		info: '<strong>Grove City, OH</strong><br>\r\
					2135 Hardy Parkway <br> Grove City, OH 43123<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var lwa = {
		info: '<strong>Lacey, WA</strong><br>\r\
					9050 Orion Drive NE <br>Lacey, WA 98516<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var lfl = {
		info: '<strong>Lakeland, FL</strong><br>\r\
					4040 S. pipkin Rd., <br>Lakeland, FL 33811<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var lpga = {
		info: '<strong>Lake Park, GA</strong><br>\r\
					6201 Peterson Rd.,<br>Lake Park, GA 31636<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var mga = {
		info: '<strong>Macon, GA</strong><br>\r\
					151 Tractor Drive <br>Macon, GA 31216<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var kil = {
		info: '<strong>Kankakee, IL</strong><br>\r\
					1405 Stanford Drive <br>Kankakee, IL 60901<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var mmi = {
		info: '<strong>Monroe, MI</strong><br>\r\
					1800 Frenchtown Center Dr.<br>Monro, MI 48162<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var mal = {
		info: '<strong>Montgomery, AL</strong><br>\r\
					125 6th St. <br>Montgomery, AL 36104<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var ofl = {
		info: '<strong>Ocala, FL</strong><br>\r\
					5587 SW 1st Lane<br>Ocala, FL 34474<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var pga = {
		info: '<strong>Pendergrass, GA</strong><br>\r\
					580 Raco Parkway<br>Pendergrass, GA 30567<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var pin = {
		info: '<strong>Pendleton, IN</strong><br>\r\
					753 W Pioneer Trace<br>Pendleton,IN 46064<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var upil = {
		info: '<strong>University Park, IL</strong><br>\r\
					2635 Federal Signal Dr.<br>University Park, IL 60484<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var wnc = {
		info: '<strong>Wilson, NC</strong><br>\r\
					1819 Goldsboro St. SW<br>Wilson, NC 27893<br>\
					<a href="https://goo.gl/maps/8pLGeWqG8Er">Get Directions</a>',
		
	};
	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(41.976816, -87.659916),
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