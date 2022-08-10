import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

import DetailPage from './components/pages/DetailPage';
import MainPage from './components/pages/MainPage';
import ReviewWritePage from './components/pages/ReviewWritePage';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
// admin
import LectureRegisterPage from './components/pages/admin/LectureRegisterPage';
import CategoryRegisterPage from './components/pages/admin/CategoryRegisterPage';
import LectureListPage from './components/pages/admin/LectureListPage';
import UserListPage from './components/pages/admin/UserListPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SearchResultPage from './components/pages/SearchResultPage';
import MyPagePage from './components/pages/MyPagePage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='lecture' element={<DetailPage />} />
          <Route path='review' element={<ReviewWritePage />} />
          <Route path='signin' element={<SigninPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='search' element={<SearchResultPage />} />
          <Route path='mypage' element={<MyPagePage />} />

          <Route path='admin'>
            <Route
              path='lecture-registration'
              element={<LectureRegisterPage />}
            />
            <Route
              path='category-registration'
              element={<CategoryRegisterPage />}
            />
            <Route path='lectures' element={<LectureListPage />} />
            <Route path='users' element={<UserListPage />} />
          </Route>
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
};

export default App;
