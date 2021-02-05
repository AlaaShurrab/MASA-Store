const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { deleteFromCart } = require('../server/database/queries');

describe('Test Routes, Test Database deleteFromCart query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('deleteFromCart database query', () => deleteFromCart(3, 5)
    .then(() => {
      expect(1).toBe(1);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('DELETE /api/v1/cart/:userId Route', (done) => request(app)
    .delete('/api/v1/cart/2')
    .send({ productId: 10 })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('Deleted from cart successfully');
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('DELETE /api/v1/cart/:userId Route for a product that is not exist in cart', (done) => request(app)
    .delete('/api/v1/cart/2')
    .send({ productId: 3 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('This product does not exist in your cart!');
      expect(res.status).toBe(400);
      return done();
    }));
});
