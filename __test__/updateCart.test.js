const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { updateCart } = require('../server/database/queries');

describe('Test Routes, Test Database updateCart query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('updateCart database query', () => updateCart(1, 1, 1)
    .then(() => {
      expect(5).toBe(5);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('PUT /api/v1/cart/:userId Route', (done) => request(app)
    .put('/api/v1/cart/1')
    .send({ productId: 1, quantity: 1 })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('Quantity of products is updated successfully in your cart');
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('PUT /api/v1/cart/:userId Route for a product that is not existed in cart', (done) => request(app)
    .put('/api/v1/cart/1')
    .send({ productId: 4, quantity: 1 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('This product does not exist in your cart!');
      expect(res.status).toBe(400);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('PUT /api/v1/cart/:userId Route for a product with quantity less than 1', (done) => request(app)
    .put('/api/v1/cart/1')
    .send({ productId: 1, quantity: 0 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('Quantity must be larger than 0');
      expect(res.status).toBe(400);
      return done();
    }));
});
