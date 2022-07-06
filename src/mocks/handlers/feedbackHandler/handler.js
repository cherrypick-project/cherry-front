import { rest } from 'msw';
import { feedbackData } from './response';

export default [
  rest.post('/feedback', (req, res, ctx) => {
    // 피드백 제출 API
    // /feedback

    if (req.body) {
      console.log('success feedback');
    }
    return res(ctx.status(200), ctx.json(feedbackData));
  }),
];
