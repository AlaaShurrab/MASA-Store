const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getCartProducts } = require('../server/database/queries');

describe('Test Routes, Test Database getCartProducts query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getCartProducts database query', () => getCartProducts(2)
    .then((result) => {
      const actual = result.rows.length;
      const expected = 7;
      expect(actual).toBe(expected);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('GET /api/v1/cart/:userId Route', (done) => request(app)
    .get('/api/v1/cart/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(4);
      expect(JSON.parse(res.text).data[0].quantity).toBe(5);
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('GET /api/v1/cart/:userId Route for empty cart', (done) => request(app)
    .get('/api/v1/cart/6')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(0);
      expect(JSON.parse(res.text).message).toBe('There are no products added to your cart');
      expect(res.status).toBe(404);
      return done();
    }));
});
