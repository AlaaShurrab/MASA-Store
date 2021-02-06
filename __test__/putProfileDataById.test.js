/* const request = require('supertest');

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
      const actual = result.status;
      const expected = {
        status: 200,
        data: [
          {
            id: 1,
            email: 'john@gmail.com',
            password: '$2b$10$RIRB.RnUQaUxo/JJ9TiYquodoMssKCU/kwYrUDZwq3mFal14OBVQu',
            first_name: 'test',
            last_name: 'doe',
            avatar: 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
            role: null,
            shipping_address1: 'new road',
            shipping_address2: '7682',
            city: 'kilcoole',
            payment_method: null,
            payment_card_name: null,
            payment_card_number: null,
            payment_card_expire_date: null,
            join_date: '2021-02-06T01:07:21.490Z',
            total_spending: 0,
            last_order: null,
          },
        ],
        message: 'Update successfully',
      };
      expect(actual).toEqual(expected);
    })
    .catch());
});
 */
