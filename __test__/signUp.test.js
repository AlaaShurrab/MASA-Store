const app = require('../server/app');
const connection = require('../server/database/connection');
const buildDb = require('../server/database/data/build');
const { signUp } = require('../server/database/queries');

describe('Test Routes, Test Database sign up query', () => {
  beforeEach(() => buildDb());
  afterAll(() => connection.end());

  test('signUp>> This test will return all of the users data', () => signUp('test@ce.com', 'msa', 'test', 'dddd')
    .then((result) => {
      const actual = result.rowCount;
      const expected = 1;
      expect(actual).toEqual(expected);
    })
    .catch());
});
