import { rest } from 'msw';
import { adminFeedback, feedbackData } from './response';

export default [
  rest.post('/feedback', (req, res, ctx) => {
    // 피드백 제출 API
    // /feedback

    if (req.body) {
      console.log('success feedback');
    }
    return res(ctx.status(200), ctx.json(feedbackData));
  }),
  rest.get('/feedbacks', (req, res, ctx) => {
    // 관리자 페이지, 피드백 조회 API
    // /feedbacks

    return res(ctx.status(200), ctx.json(adminFeedback));
  }),
];
