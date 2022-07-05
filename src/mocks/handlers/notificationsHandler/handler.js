import { rest } from 'msw';
import { notifications } from './response';

export default [
  rest.get('/notifications', (req, res, ctx) => {
    // 알림 조회 검색 API
    // /notifications

    return res(ctx.status(200), ctx.json(notifications));
  }),
];
