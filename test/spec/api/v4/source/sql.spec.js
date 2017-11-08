var carto = require('../../../../../src/api/v4');

describe('api/v4/source/sql', function () {
  describe('constructor', function () {
    it('should return a new Dataset object', function () {
      var sqlDataset = new carto.source.SQL('SELECT * FROM ne_10m_populated_places_simple WHERE adm0name = \'Spain\'');
      expect(sqlDataset).toBeDefined();
    });

    it('should autogenerate an id when no ID is given', function () {
      var sqlDataset = new carto.source.SQL('SELECT * FROM ne_10m_populated_places_simple WHERE adm0name = \'Spain\'');
      expect(sqlDataset.getId()).toMatch(/S\d+/);
    });
  });

  describe('$setEngine', function () {
    it('should create an internal model with the dataset attrs and the engine', function () {
      var sqlDataset = new carto.source.SQL('SELECT * FROM ne_10m_populated_places_simple WHERE adm0name = \'Spain\'', { id: 'sql0' });

      sqlDataset.$setEngine('fakeEngine');

      var internalModel = sqlDataset.$getInternalModel();
      expect(internalModel.get('id')).toEqual(sqlDataset.getId());
      expect(internalModel.get('query')).toEqual('SELECT * FROM ne_10m_populated_places_simple WHERE adm0name = \'Spain\'');
      expect(internalModel._engine).toEqual('fakeEngine');
    });
  });
});