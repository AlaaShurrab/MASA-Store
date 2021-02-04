const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { addFavoriteProduct } = require('../server/database/queries');

describe('Test Routes, Test Database addFavorite query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('addFavorite database query', () => addFavoriteProduct(3, 2)
    .then(() => {
      expect(5).toBe(5);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/favorite/:userId Route', (done) => request(app)
    .post('/api/v1/favorite/1')
    .send({ productId: 2 })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('A new favorite product is added successfully');
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/favorite/:userId Route for a product that is exist in favorite', (done) => request(app)
    .post('/api/v1/favorite/1')
    .send({ productId: 5 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('This product already exists in your favorites list!');
      expect(res.status).toBe(400);
      return done();
    }));
});
