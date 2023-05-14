import { rest } from 'msw';

export default [
  rest.delete(`${process.env.API_BASE_URL}/api/users`, (_, response, context) =>
    response(
      context.status(200),
      context.delay(process.env.NODE_ENV === 'test' ? 0 : 750),
    ),
  ),
];
