var MultiPolygonView = require('../../../../../src/geo/leaflet/geometries/multi-polygon-view');
var MultiPolygon = require('../../../../../src/geo/geometry-models/multi-polygon');
var SharedTestsForMultiGeometryViews = require('./shared-tests-for-multi-geometry-views');
var FakeLeafletMap = require('./fake-leaflet-map');

describe('src/geo/leaflet/geometries/multi-polygon-view.js', function () {
  beforeEach(function () {
    this.geometry = new MultiPolygon(null, {
      latlngs: [
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4]
        ],
        [
          [0, 10],
          [10, 20],
          [20, 30],
          [30, 40]
        ]
      ]
    });
    this.leafletMap = new FakeLeafletMap();

    this.geometryView = new MultiPolygonView({
      model: this.geometry,
      nativeMap: this.leafletMap
    });
  });

  SharedTestsForMultiGeometryViews.call(this);

  it('should render the geometries', function () {
    expect(this.leafletMap.getPaths().length).toEqual(2); // 2 geometries
    expect(this.leafletMap.getMarkers().length).toEqual(8); // 4 markers for each geometry
  });
});
