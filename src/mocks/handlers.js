import lecturesHandler from './handlers/lecturesHandler/handler';
import reviewsHandler from './handlers/reviewsHandler/handler';
import categoryHandler from './handlers/categoryHandler/handler';
import lectureDetailHandler from './handlers/lectureDetailHandler/handler';
import createReviewHandler from './handlers/createReview/handler';
import adminUsersHandler from './handlers/adminUsers/handler';
import adminLectureHandler from './handlers/adminLectures/handler';
import notificationsHandler from './handlers/notificationsHandler/handler';
import feedbackHandler from './handlers/feedbackHandler/handler';
import userHandler from './handlers/userHandler/handler';

export const handlers = [
  ...lecturesHandler,
  ...reviewsHandler,
  ...categoryHandler,
  ...lectureDetailHandler,
  ...createReviewHandler,
  ...adminUsersHandler,
  ...adminLectureHandler,
  ...notificationsHandler,
  ...feedbackHandler,
  ...userHandler,
];
