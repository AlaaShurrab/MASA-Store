const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { addOrdersById } = require('../server/database/queries');

const orderNumber = `${Date.now()}${12}‏${4}`;
describe('Test Routes, Test Database addOrdersById query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('addOrdersById database query', () => addOrdersById(12, 1, 144, 'cash', orderNumber, 4)
    .then((result) => {
      const actual = result.rows[0].order_number;
      const expected = orderNumber;
      expect(actual).toEqual(expected);
    })

    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('POST /api/v1/orders/:userId', (done) => request(app)
    .post('/api/v1/orders/4')
    .send(
      {
        productId: '12',
        quantity: '1',
        price: '144',
        paymentMethod: 'cash',
      },
    )
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('added successfully');
      expect(res.status).toBe(200);
      return done();
    }));
});
