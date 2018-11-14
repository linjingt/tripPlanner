const mapboxgl = require('mapbox-gl');
const {map} = require('./index');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  const markerDomElem = document.createElement('div');
  markerDomElem.style.width = "32px";
  markerDomElem.style.height = "39px";
  markerDomElem.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapboxgl.Marker(markerDomElem).setLngLat(coords)
  //.addTo(map);
  //can't do that, have to return here, addTo(map) in index.js
}

module.exports = {buildMarker}
