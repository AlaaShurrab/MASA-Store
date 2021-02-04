const request = require('supertest');
const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { signUp } = require('../server/database/queries');

describe('Test Routes, Test Database getAllProducts query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getAllProducts >> This test will return all of the products data', () => signUp('test@ce.com', 'msa', 'test', 'dddd')
    .then((result) => {
      const actual = result.rowCount;
      const expected = 1;
      expect(actual).toEqual(expected);
    })
    .catch());

  // eslint-disable-next-line jest/no-done-callback
  test('Route POST /api/v1/signup', (done) => request(app)
    .post('/api/v1/signup')
    .send({
      email: 'text@email.com', first_name: 'masa', last_name: 'G9', password: 'PASSWORD',
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('sign up successful');
      expect(res.status).toBe(200);
      return done();
    }));
});
