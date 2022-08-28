export const feedbackData = {
  result: 'SUCCESS',
  data: 12312312,
  message: null,
};

export const adminFeedback = {
  content: [
    {
      id: 1,
      email: 'mimiuu2222@gmail.com',
      content: '피드백 내용~~~~~~~',
      rating: '2.5',
      ceateAt: '2022.02.15',
      updatedAt: '2022.02.28',
      action: '이메일 전송',
    },
    {
      id: 2,
      email: 'mimiuu2222@gmail.com',
      content: '피드백 내용~~~~~~~',
      rating: '2.5',
      ceateAt: '2022.02.15',
      updatedAt: '2022.02.28',
      action: '확인',
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
