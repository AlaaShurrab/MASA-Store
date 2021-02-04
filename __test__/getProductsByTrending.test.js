const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getProductsByTrending } = require('../server/database/queries');

describe('Test Routes, Test Database getProductsByTrending query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getProductsByTrending >> This test will return all of the products data ordered by the number of orders for every product', () => getProductsByTrending()
    .then((result) => {
      expect(result.rows[0].number_of_orders).toBeGreaterThanOrEqual(
        result.rows[2].number_of_orders,
      );
    })
    .catch());

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/products/trending', (done) => request(app)
    .get('/api/v1/products/trending')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(20);
      expect(
        JSON.parse(res.text).data[1].number_of_orders,
      ).toBeGreaterThanOrEqual(JSON.parse(res.text).data[3].number_of_orders);
      expect(res.status).toBe(200);
      return done();
    }));
});
