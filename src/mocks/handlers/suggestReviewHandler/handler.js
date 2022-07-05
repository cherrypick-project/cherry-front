import { rest } from 'msw';
import { suggestReview } from './response';

export default [
  rest.get('/reviews', (req, res, ctx) => {
    // 메인페이지 중간 정보 리뷰 API
    // reviews?page=1&size=3&sort=rand
    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('size');
    const sort = req.url.searchParams.get('sort');

    if (page && size && sort) {
      return res(ctx.status(200), ctx.json(suggestReview));
    }

    return req.passthrough();
  }),
];
