import { rest } from 'msw';
import {
  search,
  hotSixBackEnd,
  hotSixFrontEnd,
  bookMark,
  categoryBackendLectures,
  categoryFrontendLectures,
  thirdCategoryLectures,
} from './response';

export default [
  rest.get('/lectures', (req, res, ctx) => {
    // 강의 검색 API
    // /lectures?sort=reviewCount&page=1&size=9&searchName=javascript
    // ! 미구현
    const sort = req.url.searchParams.get('sort');
    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('size');
    const searchName = req.url.searchParams.get('searchName');

    if (sort && page && size === '9' && searchName) {
      return res(ctx.status(200), ctx.json(search));
    }

    //** */

    // Hot6 조회 API(기능설명)
    // /lectures?sort=reviewCount&page=1&size=6&depth=1&categoryId=1

    // - sort 항상 reviewCount로 고정(인기순이므로)
    // - page 항상 1로 고정
    // - size 강의 카드 개수 6개
    // - depth depth 항상 1 고정
    // - categoryId 프론트엔드, 백엔드인지 결정, 프론트엔드는 1, 백엔드는 2
    const depth = req.url.searchParams.get('depth');
    const categoryId = req.url.searchParams.get('categoryId');

    if (sort && page && size === '6' && depth) {
      if (categoryId === '1') {
        return res(ctx.status(200), ctx.json(hotSixFrontEnd));
      } else if (categoryId === '2') {
        return res(ctx.status(200), ctx.json(hotSixBackEnd));
      }
    }

    // ** */

    // 메인 페이지 강의 리스트 조회 API
    // '/lectures?page=0&size=9&depth=1&categoryId=0&sort=reviewCount,desc'
    if (sort && page && size) {
      if (depth === '1' && categoryId === '0') {
        return res(ctx.status(200), ctx.json(categoryFrontendLectures));
      } else if (depth === '1' && categoryId === '1') {
        return res(ctx.status(200), ctx.json(categoryBackendLectures));
      } else if (depth === '3') {
        return res(ctx.status(200), ctx.json(thirdCategoryLectures));
      }

      return res(ctx.status(200), ctx.json(categoryBackendLectures));
    }

    return req.passthrough();
  }),
  rest.post('/lectures/:lectureId/bookmark', (req, res, ctx) => {
    // 북마크 보내기
    // /lectures/{lectureId}/bookmark
    const { lectureId } = req.params;

    return res(ctx.status(200), ctx.json(bookMark));
  }),
  rest.get('/lectures/bookmarks', (req, res, ctx) => {
    // 내 북마크 조회

    return res(ctx.status(200), ctx.json(search));
  }),
];
