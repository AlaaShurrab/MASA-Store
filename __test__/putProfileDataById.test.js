// eslint-disable-next-line no-unused-vars
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
    .then(({ rows }) => {
      const actual = rows[0];
      const expected = {
        id: 1,
        email: 'john@gmail.com',
        first_name: 'test',
        last_name: 'doe',
        avatar:
            'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        shipping_address1: 'new road',
        shipping_address2: '7682',
        city: 'kilcoole',
        payment_method: null,
        payment_card_name: null,
        payment_card_number: null,
        payment_card_expire_date: null,
        total_spending: 0,
        last_order: null,
      };
      expect(actual).toEqual(expect.objectContaining(expected));
    })
    .catch());
});
