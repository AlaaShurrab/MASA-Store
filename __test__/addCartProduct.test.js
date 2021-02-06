const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { addCartProduct } = require('../server/database/queries');

describe('Test Routes, Test Database addCartProduct query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('addCartProduct database query', () => addCartProduct(3, 2, 1)
    .then(() => {
      expect(5).toBe(5);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/cart/:userId Route', (done) => request(app)
    .post('/api/v1/cart/2')
    .send({ productId: 3, quantity: 1 })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('The product is added successfully to your cart');
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/cart/:userId Route for a product that is exist in cart', (done) => request(app)
    .post('/api/v1/cart/1')
    .send({ productId: 5, quantity: 1 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('This product already exists in your cart!');
      expect(res.status).toBe(400);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/cart/:userId Route for a product with quantity less than 1', (done) => request(app)
    .post('/api/v1/cart/2')
    .send({ productId: 3, quantity: 0 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('Quantity must be larger than 0');
      expect(res.status).toBe(400);
      return done();
    }));
});
