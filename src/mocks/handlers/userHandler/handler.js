import { rest } from 'msw';
import { user } from './responsive';

export default [
  rest.get('/user', (req, res, ctx) => {
    // 유저 프로필 조회 API
    // /user

    return res(ctx.status(200), ctx.json(user));
  }),
];
