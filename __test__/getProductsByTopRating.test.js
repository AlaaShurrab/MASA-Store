const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getProductsByTopRating } = require('../server/database/queries');

describe('Test Routes, Test Database getProductsByTopRating query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getProductsByTopRating >> This test will return all of the products data ordered by rating', () => getProductsByTopRating()
    .then((result) => {
      expect(result.rows[0].rating).toBeGreaterThanOrEqual(result.rows[2].rating);
    })
    .catch());

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/products/top-rated', (done) => request(app)
    .get('/api/v1/products/top-rated')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(20);
      expect(JSON.parse(res.text).data[1].rating)
        .toBeGreaterThanOrEqual(JSON.parse(res.text).data[3].rating);
      expect(res.status).toBe(200);
      return done();
    }));
});
