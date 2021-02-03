const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getFavorite } = require('../server/database/queries');

describe('Test Routes, Test Database getFavorite query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getFavorite database query', () => getFavorite(2)
    .then((result) => {
      const actual = result.rows.length;
      const expected = 7;
      expect(actual).toBe(expected);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('GET /api/v1/favorite/:userId Route', (done) => request(app)
    .get('/api/v1/favorite/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(3);
      expect(JSON.parse(res.text).data[0].new_price).toBe(695);
      expect(res.status).toBe(200);
      return done();
    }));
});
