const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getProductsByCategory } = require('../server/database/queries');

describe('Test Routes, Test Database get products by category query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getProductsByCategory >> This test will return all of the data of a product using id', () => getProductsByCategory('fashion')
    .then((result) => {
      const actual = result.rows[0].category;
      const expected = 'fashion';
      expect(actual).toEqual(expected);
    })
    .catch());

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/products/:category', (done) => request(app)
    .get('/api/v1/products/fashion')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(10);
      expect(JSON.parse(res.text).data[0].category).toBe('fashion');
      expect(res.status).toBe(200);
      return done();
    }));

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/product/:productId when given a CATEGORY not in the database', (done) => request(app)
    .get('/api/v1/products/fashiondfdsf')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(0);
      expect(JSON.parse(res.text).message).toBe('product does not exist within this category ');
      expect(res.status).toBe(404);
      return done();
    }));
});
