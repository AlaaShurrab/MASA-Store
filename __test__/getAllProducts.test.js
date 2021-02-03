const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getAllProducts } = require('../server/database/quieres');

describe('Test Routes, Test Database getAllProducts query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getAllProducts >> This test will return all of the products data', () => getAllProducts()
    .then((result) => {
      const actual = result.rows[0];
      const expected = {
        category: 'fashion',
        description: 'حقيبتي المثالية للاستخدام اليومي والمشي في الغابة قم بتخزين الكمبيوتر المحمول حتى 15 بوصة في الجراب المبطّن كل يوم',
        id: 1,
        img_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        name: 'حقيبة لابتوب 15 بوصة',
        new_price: 109.95,
        old_price: null,
        quantity: 100,
        rating: 3.236,
      };
      expect(actual).toEqual(expected);
    })
    .catch());

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/products', (done) => request(app)
    .get('/api/v1/products')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(20);
      expect(JSON.parse(res.text).data[0].name).toBe('حقيبة لابتوب 15 بوصة');
      expect(res.status).toBe(200);
      return done();
    }));
});
