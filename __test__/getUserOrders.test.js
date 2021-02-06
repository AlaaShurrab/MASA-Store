const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getOrdersByUsersId } = require('../server/database/queries');

describe('Test Routes, Test Database getOrdersByUsersId query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getOrders >> This test will return orders by user id', () => getOrdersByUsersId(4)
    .then((result) => {
      const actual = result.rows.length;
      const expected = result.rowCount;
      expect(actual).toBe(expected);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/orders/:userId', (done) => request(app)
    .get('/api/v1/orders/4')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data[0].user_id).toBe(4);
      expect(res.status).toBe(200);
      return done();
    }));
});
