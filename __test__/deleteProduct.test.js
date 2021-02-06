const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { deleteProduct } = require('../server/database/queries');

describe('Test Routes, Test Database delete product query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('delete product from database query', () => deleteProduct(8)
    .then(() => {
      expect(1).toBe(1);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('DELETE /api/v1/product/:id Route', (done) => request(app)
    .delete('/api/v1/product/8')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('Deleted successfully');
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('DELETE /api/v1/product/:id Route for a product that is not exist', (done) => request(app)
    .delete('/api/v1/product/88')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('This product does not exist');
      expect(res.status).toBe(400);
      return done();
    }));
});
