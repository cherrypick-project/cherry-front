import { rest } from 'msw';
import { myReviews, suggestReview } from './response';

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

    // 마이 페이지, 내가 쓴 리뷰 API
    // reviews?sort=createAt
    if (sort === 'createAt') {
      return res(ctx.status(200), ctx.json(myReviews));
    }

    return req.passthrough();
  }),
];
