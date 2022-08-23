var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
//global vars
var qNum = 1;
var correct = 0;
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.240, lng: -118.530 },
    //center: csuncords,
    zoom: 16,
    gestureHandling: "none", //no zoom or moving around
    zoomControl: false,
    clickableIcons: false,
    disableDefaultUI: true, //disable buttons like map/satellite
    //how to get no labels https://stackoverflow.com/questions/3110020/google-maps-api-v3-no-labels
      styles: [{
        featureType: "all",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
        {"featureType": "poi",
        "elementtype": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
        }   
              ]
  });
   map.addListener("dblclick", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

//https://developers.google.com/maps/documentation/javascript/examples/event-arguments
function placeMarkerAndPanTo(latLng, map) {
  new google.maps.Marker({
    position: latLng,
    map: map,
  });
  var libBounds =  new google.maps.LatLngBounds(
    new google.maps.LatLng(34.2399216376474,-118.53002657428429), //south, west
    new google.maps.LatLng(34.240379684241255,-118.52864667961552), //north, east
      );
  var thBounds =  new google.maps.LatLngBounds(
    new google.maps.LatLng(34.23648533598736, -118.52838128470846), //south, west
    new google.maps.LatLng(34.23662244248354, -118.52754696395336), //north, east
      );
  var jcBounds =  new google.maps.LatLngBounds(
    new google.maps.LatLng(34.24104744087867, -118.52945748217911), //south, west
    new google.maps.LatLng(34.242083013015666, -118.52784567576911), //north, east
      );
  var srcBounds =  new google.maps.LatLngBounds(
    new google.maps.LatLng(34.23934609465699, -118.52511269036475), //south, west
    new google.maps.LatLng(34.24059858543333, -118.52472908745429), //north, east
      );
  var sieBounds =  new google.maps.LatLngBounds(
    new google.maps.LatLng(34.23811438672652, -118.53137454971716), //south, west
    new google.maps.LatLng(34.238442469873554, -118.53005714997298), //north, east
      );
  //https://developers.google.com/maps/documentation/javascript/shapes#rectangles
  switch(qNum){
    case 1:
      if (libBounds.contains(latLng)) {
        drawRectGreen(libBounds);
        correct++;
        document.getElementById("a1").innerHTML = " Correct!";
      }
      else {
        drawRectRed(libBounds);
        document.getElementById("a1").innerHTML = " Incorrect :(";
      }
      qNum++;
      q2.classList.remove("hide");
      break;
    case 2:
      if (thBounds.contains(latLng)) {
        drawRectGreen(thBounds);
        correct++;
        document.getElementById("a2").innerHTML = " Correct!";
      }
      else {
        drawRectRed(thBounds);
        document.getElementById("a2").innerHTML = " Incorrect :(";
      }
      qNum++;
      q3.classList.remove("hide");
      break;
    case 3:
      if (jcBounds.contains(latLng)) {
        drawRectGreen(jcBounds);
        correct++;
        document.getElementById("a3").innerHTML = " Correct!";
      }
      else {
        drawRectRed(jcBounds);
        document.getElementById("a3").innerHTML = " Incorrect :(";
      }
      qNum++;
      q4.classList.remove("hide");
      break;
    case 4:
      if (srcBounds.contains(latLng)) {
        drawRectGreen(srcBounds);
        correct++;
        document.getElementById("a4").innerHTML = " Correct!";
      }
      else {
        drawRectRed(srcBounds);
        document.getElementById("a4").innerHTML = " Incorrect :(";
      }
      qNum++;
      q5.classList.remove("hide");
      break;
    case 5:
      if (sieBounds.contains(latLng)) {
        drawRectGreen(sieBounds);
        correct++;
        document.getElementById("a5").innerHTML = " Correct!";
      }
      else {
        drawRectRed(sieBounds);
        document.getElementById("a5").innerHTML = " Incorrect :(";
      }
      qNum++;
      document.getElementById("score").innerHTML = correct + " Correct!"
      break;
  }
}

function drawRectRed(bounds) {
  const rectangle = new google.maps.Rectangle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      bounds: bounds,
    });
}

function drawRectGreen(bounds) {
  const rectangle = new google.maps.Rectangle({
      strokeColor: "green",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "green",
      fillOpacity: 0.35,
      map,
      bounds: bounds,
    });
}

window.initMap = initMap;
