const request = require('supertest');

const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { putProfileDataById } = require('../server/database/queries');

describe('Test Routes, Test Database putProfileDataById query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('putProfileDataById database query', () => putProfileDataById(
    'test',
    'doe',
    'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
    'new road',
    '7682',
    'kilcoole',
    null,
    null,
    null,
    null,
    1,
  )
    .then((result) => {
      const actual = result.rows[0].first_name;
      const expected = 'test';
      expect(actual).toBe(expected);
    })
    .catch());
});
