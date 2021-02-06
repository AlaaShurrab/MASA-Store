const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');

describe('Test Routes, Test Database add new product route', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/product Route', (done) => request(app)
    .post('/api/v1/product')
    .send({
      name: 'name',
      description: 'lorem',
      img_url: 'url',
      category: 'fashion',
      rating: 3,
      price: 100,
      quantity: 4,
      imgs: ['img1', 'img2', 'img3'],
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('The product is added successfully');
      expect(res.status).toBe(200);
      return done();
    }));
});
