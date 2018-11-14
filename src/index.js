const mapboxgl = require('mapbox-gl');
const {buildMarker} = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoibGluamluZ3QiLCJhIjoiY2pvZzgwcTl2MGNkNzNrcWRqMnZ0czF1cyJ9.Nld3W3ZPApUi8KVp4AEenw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = buildMarker('activities', [-87.6354, 41.8885]);
marker.addTo(map);

module.exports = {map}
