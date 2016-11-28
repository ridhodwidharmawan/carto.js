var View = require('../../../core/view');

var GeometryViewBase = View.extend({
  initialize: function (options) {
    if (!options.model) throw new Error('model is required');
    if (!options.nativeMap) throw new Error('nativeMap is required');

    this.model = this.model || options.model;
    this.leafletMap = options.nativeMap;

    this.model.on('remove', this._onGeometryRemoved, this);
  },

  _onGeometryRemoved: function () {
    this.clean();
  }
});

module.exports = GeometryViewBase;
