const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');

describe('Test Routes, Test updating a product route', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  // eslint-disable-next-line jest/no-done-callback
  test('put /api/v1/product Route', (done) => request(app)
    .put('/api/v1/product/1')
    .send({
      name: 'name',
      description: 'lorem',
      img_url: 'url',
      category: 'fashion',
      rating: 3,
      price: 10,
      quantity: 4,
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('product updated successfully');
      expect(res.status).toBe(200);
      return done();
    }));
});
