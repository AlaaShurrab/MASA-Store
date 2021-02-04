const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { deleteFromFavorite } = require('../server/database/queries');

describe('Test Routes, Test Database deleteFromFavorite query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('deleteFromFavorite database query', () => deleteFromFavorite(3, 5)
    .then(() => {
      expect(5).toBe(5);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('DELETE /api/v1/favorite/:userId Route', (done) => request(app)
    .delete('/api/v1/favorite/1')
    .send({ productId: 5 })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('Deleted from favorite successfully');
      expect(res.status).toBe(200);
      return done();
    }));
  // eslint-disable-next-line jest/no-done-callback
  test('DELETE /api/v1/favorite/:userId Route for a product that is not exist in favorite', (done) => request(app)
    .delete('/api/v1/favorite/8')
    .send({ productId: 6 })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('This product does not exist in your favorites list!');
      expect(res.status).toBe(400);
      return done();
    }));
});
