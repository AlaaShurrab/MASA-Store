const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { getProfileDataById } = require('../server/database/queries');

describe('Test Routes, Test Database getProfileDataById query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('getProfileDataById database query', () => getProfileDataById(1)
    .then((result) => {
      const actual = result.rowCount;
      const expected = 1;
      expect(actual).toBe(expected);
    })
    .catch());
  // eslint-disable-next-line jest/no-done-callback
  test('GET /api/v1/profile/:userId Route', (done) => request(app)
    .get('/api/v1/profile/1')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).toBe(200);
      return done();
    }));
});
