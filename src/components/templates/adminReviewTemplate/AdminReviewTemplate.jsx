import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';
import { axiosInstance } from '../../../api';

import sortDown from '../../../assets/img/sortDown.png';
import searchRed from '../../../assets/img/search_red.svg';
import Pagination from '../../UI/atoms/pagination/Pagination';

const AdminReviewTemplate = () => {
  const [pageState, setPageState] = useState(1);
  const [userIdState, setUserIdState] = useState('');
  const [typeUserIdState, setTypeUserIdState] = useState('');
  const [sortState, setSortState] = useState('createAt');

  // - sort creatAt 고정
  // - page 1 유동
  // - size 5 고정
  // - userId -> useState 유저 id searchInput 사용 유동

  const { data: adminReviewData, isLoading: isAdminReviewDataLoading } =
    useQuery(
      ['adminMangeReview', sortState, pageState, userIdState],
      () =>
        // reviews?page=1&size=3&sort=rand&userId='lexKim'
        axiosInstance.get(
          `/reviews?page=${pageState}&size=5&sort=createAt&userId=${userIdState}`,
        ),
      { keepPreviousData: true },
    );

  function searchHandler(e) {
    setUserIdState(typeUserIdState);
  }

  function typeUserIdHandler(e) {
    setTypeUserIdState(e.target.value);
  }

  //! 정렬 버튼 UI 만들어야함

  return (
    <JustifyCenter>
      <AdminHeader>
        <HeaderTitle>CherryPick</HeaderTitle>
        <StyledLink to='#'>강의 리스트</StyledLink>
        <StyledLink to='#'>회원 관리</StyledLink>
        <StyledLink to='#'>리뷰 관리</StyledLink>
        <StyledLink to='#'>통계 분석</StyledLink>
        <StyledLink to='#'>피드백</StyledLink>
        <StyledLink to='#'>카테고리 추가</StyledLink>
      </AdminHeader>

      <ManageReviewHeader>
        <Title>리뷰 관리</Title>

        <SortButton>
          전체
          <Down src={sortDown} alt='정렬 버튼' />
        </SortButton>

        <SearchContainer>
          <SearchId
            value={typeUserIdState}
            onChange={typeUserIdHandler}
            placeholder='계정으로 검색'></SearchId>
          <SearchImg onClick={searchHandler} src={searchRed} alt='검색 버튼' />
        </SearchContainer>
      </ManageReviewHeader>

      <StandardHeader>
        <StandardNumber>번호</StandardNumber>
        <StandardAccount>계정</StandardAccount>
        <StandardLecture>강의명</StandardLecture>
        <StandardDate>등록일</StandardDate>
        <StandardState>리뷰상태</StandardState>
        <StandardConfirmDate>확인일</StandardConfirmDate>
      </StandardHeader>

      {!isAdminReviewDataLoading && (
        <>
          <ReviewUl>
            {adminReviewData.data.data.content.map(
              ({ id, email, name, ceatedAt, status, updatedAt }) => (
                <ReviewLi key={id}>
                  <ReviewNumber>{id}</ReviewNumber>
                  <ReviewAccount>{email}</ReviewAccount>
                  <ReviewLecture>{name}</ReviewLecture>
                  <ReviewDate>{ceatedAt}</ReviewDate>
                  <ReviewState state={status}>{status}</ReviewState>
                  <ReviewConfirmDate>{updatedAt}</ReviewConfirmDate>
                </ReviewLi>
              ),
            )}
          </ReviewUl>
          <Pagination
            pageState={pageState}
            setPageState={setPageState}
            totalPages={adminReviewData.data.data.totalPages}
            curPage={adminReviewData.data.data.number}
          />
        </>
      )}
    </JustifyCenter>
  );
};

const ReviewLi = styled.li`
  list-style: none;

  display: flex;
  align-items: center;

  margin-top: 16px;
  padding-left: 36px;

  width: 100%;
  border: 1px solid #2a2a2a;
`;

const ReviewSpan = styled.span`
  display: inline-block;
  overflow-wrap: break-word;

  padding: 26px 0 26px;

  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
`;

const ReviewConfirmDate = styled(ReviewSpan)`
  text-align: center;
  flex: 2;
`;

const ReviewState = styled(ReviewSpan)`
  ${({ state }) =>
    state === '승인'
      ? css`
          color: #00ff29;
        `
      : state === '거부'
      ? css`
          color: #e72847;
        `
      : css`
          color: #feb700;
        `}

  text-align: center;
  flex: 2;
`;
const ReviewDate = styled(ReviewSpan)`
  text-align: center;
  flex: 2;
`;
const ReviewLecture = styled(ReviewSpan)`
  flex: 5;
`;
const ReviewAccount = styled(ReviewSpan)`
  flex: 3;
`;
const ReviewNumber = styled(ReviewSpan)`
  flex: 1;
`;

const ReviewUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StandardName = styled.li`
  list-style: none;

  color: #212121;
  font-weight: 600;
  font-size: 1rem;
`;

const StandardConfirmDate = styled(StandardName)`
  text-align: center;
  flex: 2;
`;

const StandardState = styled(StandardName)`
  text-align: center;
  flex: 2;
`;

const StandardDate = styled(StandardName)`
  flex: 2;
  text-align: center;
`;

const StandardLecture = styled(StandardName)`
  flex: 5;
`;

const StandardAccount = styled(StandardName)`
  flex: 3;
`;

const StandardNumber = styled(StandardName)`
  flex: 1;
`;

const StandardHeader = styled.ul`
  display: flex;
  align-items: center;

  padding-left: 36px;
  margin-top: 84px;

  width: 100%;
  height: 64px;

  background-color: #ffffff;
  opacity: 0.9;
`;

const SearchContainer = styled.div`
  margin-left: auto;
  position: relative;
`;

const SearchImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 5px;
`;

const SearchId = styled.input`
  all: unset;
  box-sizing: border-box;

  background-color: #24252c;
  border-radius: 100px;

  width: 340px;
  height: 44px;

  padding: 16px 20px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;

  &::placeholder {
    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
    opacity: 0.6;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  display: block;

  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;

  margin-left: 24px;
`;

const HeaderTitle = styled.h1`
  margin-right: auto;

  font-weight: 700;
  font-size: 1.125rem;
  color: #ffffff;
`;

const AdminHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
`;

const Down = styled.img`
  display: inline-block;

  width: 9.75px;
  height: 5.25px;
`;

const SortButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 72px;
  height: 28px;
  padding: 8px 12px;

  background-color: #1f2026;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
`;

const ManageReviewHeader = styled.div`
  display: flex;
  align-items: center;

  margin-top: 60px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffffff;

  margin-right: 20px;
`;

const JustifyCenter = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default AdminReviewTemplate;
