const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getClients } = require('../server/database/queries');

describe('Test Routes, Test Database getClients query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getClients >> This test will return clients data', () => getClients()
    .then((result) => {
      const actual = result.rows.length;
      const expected = 10;
      expect(actual).toBe(expected);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/clients', (done) => request(app)
    .get('/api/v1/clients')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(10);
      expect(JSON.parse(res.text).data[0].first_name).toBe('john');
      expect(res.status).toBe(200);
      return done();
    }));
});
