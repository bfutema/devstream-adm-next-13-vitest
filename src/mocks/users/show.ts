import { rest } from 'msw';

import { userMock } from './userMock';

export default [
  rest.get(`${process.env.API_BASE_URL}/api/users/1`, (_, response, context) =>
    response(
      context.status(200),
      context.delay(process.env.NODE_ENV === 'test' ? 0 : 750),
      context.json(userMock),
    ),
  ),
];
