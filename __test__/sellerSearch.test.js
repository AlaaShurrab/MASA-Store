const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');

describe('Test search Route', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/search/?word=&section=clients', (done) => request(app)
    .get('/api/v1/search?word=john&section=clients')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(1);
      expect(res.status).toBe(200);
      return done();
    }));

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/search?word=jo when searching without defining the section', (done) => request(app)
    .get('/api/v1/search?word=jo')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('You should select the section to search into');
      expect(res.status).toBe(400);
      return done();
    }));

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET /api/v1/search when searching without entering a search word', (done) => request(app)
    .get('/api/v1/search')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).message).toBe('You should enter a word to search for');
      expect(res.status).toBe(400);
      return done();
    }));

  // eslint-disable-next-line jest/no-done-callback
  test('Route GET api/search?word=sarah&section=orders when there is no client with this name in orders section', (done) => request(app)
    .get('/api/v1/search/?word=sarah&section=orders')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(JSON.parse(res.text).data.length).toBe(0);
      expect(JSON.parse(res.text).message).toBe('No search results for this client in orders section');
      expect(res.status).toBe(404);
      return done();
    }));
});
