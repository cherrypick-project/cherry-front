export const suggestReview = {
  content: [
    {
      id: 1,
      rating: 1.5,
      recommendation: '추천해요!',
      costPerformance: '매우 만족',
      oneLineComment: '퀄리티가 넘 좋습니다1.',
      strengthComment:
        '3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.',
      weaknessComment:
        '3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.',
      user: {
        job: '프론트',
        career: '1년차',
      },
    },
    {
      id: 2,
      rating: 2.5,
      recommendation: '추천해요!',
      costPerformance: '매우 만족',
      oneLineComment: '퀄리티가 넘 좋습니다2.',
      strengthComment:
        '3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.',
      weaknessComment:
        '3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.',
      user: {
        job: '프론트',
        career: '1년차',
      },
    },
    {
      id: 3,
      rating: 3.5,
      recommendation: '추천해요!',
      costPerformance: '매우 만족',
      oneLineComment: '퀄리티가 넘 좋습니다3.',
      strengthComment:
        '3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.',
      weaknessComment:
        '3시간이 아깝지 않았습니다. 정말 유익하고 좋은 시간이었습니다. 꾸준히 배우고 싶네요! 엄청엄청 만족도 높습니다.',
      user: {
        job: '프론트',
        career: '1년차',
      },
    },
  ],
  pageable: {
    sort: {
      unsorted: false,
      sorted: true,
      empty: false,
    },
    pageNumber: 0,
    pageSize: 6,
    offset: 0,
    unpaged: false,
    paged: true,
  },
  totalPages: 2,
  totalElements: 9,
  last: false,
  numberOfElements: 6,
  size: 6,
  number: 0,
  first: true,
  sort: {
    unsorted: false,
    sorted: true,
    empty: false,
  },
  empty: false,
};
export const myReviews = {
  content: [
    {
      id: 1,
      desktopImgUrl:
        'https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      tabletImgUrl: 'tablet_img_url',
      mobileImgUrl: 'mobile_img_url',
      name: '데브옵스 강의 1편',
      createdAt: '2022.02.04',
      status: 'READY',
    },
    {
      id: 2,
      desktopImgUrl:
        'https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      tabletImgUrl: 'tablet_img_url',
      mobileImgUrl: 'mobile_img_url',
      name: '데브옵스 강의 2편',
      createdAt: '2022.02.04',
      status: 'APPROVE',
    },
    {
      id: 3,
      desktopImgUrl:
        'https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      tabletImgUrl: 'tablet_img_url',
      mobileImgUrl: 'mobile_img_url',
      name: '데브옵스 강의 3편',
      createdAt: '2022.02.04',
      status: 'APPROVE',
    },
    {
      id: 4,
      desktopImgUrl:
        'https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      tabletImgUrl: 'tablet_img_url',
      mobileImgUrl: 'mobile_img_url',
      name: '데브옵스 강의 4편',
      createdAt: '2022.02.04',
      status: 'READY',
    },
  ],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    pageSize: 1,
    pageNumber: 1,
    offset: 1,
    paged: true,
    unpaged: false,
  },
  number: 1,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  first: false,
  last: false,
  numberOfElements: 1,
  size: 1,
  empty: false,
};

export const adminManageReview = {
  result: 'SUCCESS',
  data: {
    content: [
      {
        id: 1,
        email: 'mimiuu2222@gmail.com',
        name: '데브옵스 강의 1강',
        ceatedAt: '2022.02.14',
        status: '승인',
        updatedAt: '2022.02.28',
      },
      {
        id: 2,
        email: 'mimiuu2222@gmail.com',
        name: '데브옵스 강의 2강',
        ceatedAt: '2022.02.14',
        status: '승인',
        updatedAt: '2022.02.28',
      },
      {
        id: 3,
        email: 'mimiuu2222@gmail.com',
        name: '데브옵스 강의 3강',
        ceatedAt: '2022.02.14',
        status: '대기',
        updatedAt: '2022.02.28',
      },
      {
        id: 4,
        email: 'mimiuu2222@gmail.com',
        name: '데브옵스 강의 4강',
        ceatedAt: '2022.02.14',
        status: '거부',
        updatedAt: '2022.02.28',
      },
    ],
    pageable: {
      sort: {
        unsorted: false,
        sorted: true,
        empty: false,
      },
      pageNumber: 0,
      pageSize: 6,
      offset: 0,
      unpaged: false,
      paged: true,
    },
    totalPages: 2,
    totalElements: 9,
    last: false,
    numberOfElements: 6,
    size: 6,
    number: 0,
    first: true,
    sort: {
      unsorted: false,
      sorted: true,
      empty: false,
    },
    empty: false,
  },
  message: null,
};

export const adminReviewDetail = [
  {
    id: 1,
    email: 'java@naver.com',
    lectureName: '자바스크립트 강의',
    createdAt: '2022.02.12',
    status: 'ready',
    modifiedAt: '2022.02.12',
    rating: 3,
    recommendation: 'VERY_SATISFACTION',
    costPerformance: 'GOOD',
    oneLineComment: '퀄리티가 넘 좋습니다.',
    strengthComment: '장점',
    weaknessComment: '단점',
    job: '프론트',
    career: '1년차',
  },
];
