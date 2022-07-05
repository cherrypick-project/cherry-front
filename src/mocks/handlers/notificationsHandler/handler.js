import { rest } from 'msw';
import { notificationDelete, notifications } from './response';

export default [
  rest.get('/notifications', (req, res, ctx) => {
    // 알림 조회 검색 API
    // /notifications

    return res(ctx.status(200), ctx.json(notifications));
  }),
  rest.delete('/notifications', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(notificationDelete));
  }),
];
