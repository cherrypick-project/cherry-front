import { rest } from 'msw';
import { statistics, user } from './responsive';

export default [
  rest.get('/user', (req, res, ctx) => {
    // 유저 프로필 조회 API

    return res(ctx.status(200), ctx.json(user));
  }),
  rest.get('/user/sign-out', (req, res, ctx) => {
    // 유저 탈퇴 API

    return res(ctx.status(200), ctx.json(user));
  }),
  rest.get('/users/statistics', (req, res, ctx) => {
    // 관리자 페이지, 통계 분석 API

    return res(ctx.status(200), ctx.json(statistics));
  }),
];
