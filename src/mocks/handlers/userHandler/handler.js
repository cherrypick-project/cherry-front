import { rest } from 'msw';
import { user } from './responsive';

export default [
  rest.get('/user', (req, res, ctx) => {
    // 유저 프로필 조회 API

    return res(ctx.status(200), ctx.json(user));
  }),
  rest.get('/user/sign-out', (req, res, ctx) => {
    // 유저 탈퇴 API

    console.log('success delete account');
    return res(ctx.status(200), ctx.json(user));
  }),
];
