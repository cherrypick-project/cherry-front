import { rest } from 'msw';
import {
  adminManageReview,
  adminReviewDetail,
  myReviews,
  suggestReview,
} from './response';

export default [
  rest.get('/reviews', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('size');
    const sort = req.url.searchParams.get('sort');
    const userId = req.url.searchParams.get('userId');

    // 관리자 페이지, 리뷰 관리 API
    if ((page && size && sort && userId) || userId === '') {
      return res(ctx.status(200), ctx.json(adminManageReview));
    }

    // 메인페이지 중간 정보 리뷰 API
    else if (page && size && sort) {
      return res(ctx.status(200), ctx.json(suggestReview));
    }

    // 마이 페이지, 내가 쓴 리뷰 API
    // reviews?sort=createAt
    else if (sort === 'createAt') {
      return res(ctx.status(200), ctx.json(myReviews));
    } else {
      return req.passthrough();
    }
  }),
  rest.get('/reviews/:userId', (req, res, ctx) => {
    const { userId } = req.params;

    // 관리자 페이지, 리뷰 상세 조회 API
    // /reviews/{userId}
    if (userId) {
      return res(ctx.status(200), ctx.json(adminReviewDetail));
    } else {
      return req.passthrough();
    }
  }),
  rest.patch('/reviews/:userId', (req, res, ctx) => {
    const { userId } = req.params;

    // 관리자 페이지, 리뷰 승인 or 거절 API
    // /reviews/{userId}
    if (userId) {
      console.log('submit');
      return res(ctx.status(200), ctx.json(null));
    } else {
      return req.passthrough();
    }
  }),
];
