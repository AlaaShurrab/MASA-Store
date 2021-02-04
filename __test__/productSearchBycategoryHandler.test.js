const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');

describe('Test Routes, Test Database get products-search in a categorys query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/product-search/?word=ح&category=fashion', (done) => request(app)
    .get('/api/v1/product-search/?word=en&category=fashion')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(1);
      expect(JSON.parse(res.text).data[0].name).toBe('Men Casual Slim Fit');
      expect(res.status).toBe(200);
      return done();
    }));

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/product-search/?word=DSADwhen searching without a category', (done) => request(app)
    .get('/api/v1/product-search/?word=en')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(2);
      expect(JSON.parse(res.text).data[1].name).toBe('محرك الأقراص الصلبة الخارجي المحمول WD 2TB Elements - USB 3.0');
      expect(res.status).toBe(200);
      return done();
    }));

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET api/v1/product-search/?word=ح&category=fashion when there is no item with like this in this category', (done) => request(app)
    .get('/api/v1/product-search/?word=&category=fashion')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(0);
      expect(JSON.parse(res.text).message).toBe('you need to enter a word to search for');
      expect(res.status).toBe(404);
      return done();
    }));
});
