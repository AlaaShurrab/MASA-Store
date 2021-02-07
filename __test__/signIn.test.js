const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { signIn } = require('../server/database/queries');

describe('Test Routes, Test Database sign in query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('signIn>> This test will return all of the users data', () => signIn('kate@gmail.com', 'PASSWORD')
    .then((result) => {
      const actual = result.rowCount;
      const expected = 1;
      expect(actual).toBe(expected);
    })
    .catch());
});
