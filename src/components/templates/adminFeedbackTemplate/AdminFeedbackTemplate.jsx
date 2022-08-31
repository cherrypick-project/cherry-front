import React, { useState } from 'react';
import ReviewAdminHeader from '../../molecules/header/ReviewAdminHeader';

import searchRed from '../../../assets/img/search_red.svg';
import styled, { css } from 'styled-components';
import AdminHeader from '../../molecules/admin/header/AdminHeader';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { axiosInstance } from '../../../api';
import Pagination from '../../UI/atoms/pagination/Pagination';

const AdminFeedbackTemplate = () => {
  const [feedbackIsClicked, setFeedbackIsClicked] = useState([]);
  const [searchLetters, setSearchLetters] = useState('');

  //* /feedbacks 피드백 조회 API
  const [searchParams, setSearchParams] = useSearchParams();

  const userId = searchParams.get('userId');
  const pageState = searchParams.get('page');

  const { data: feedbacksData, isLoading: isFeedbacksDataLoading } = useQuery(
    ['adminFeedback', pageState, userId],
    () =>
      axiosInstance.get(
        `/feedbacks?sort=createAt&size=6&page${pageState}&userId=${userId}`,
      ),
  );

  //* 피드백 확인하기 API
  function setPageState(page) {
    const userId = searchParams.get('userId');
    setSearchParams(`page=${page}&userId=${userId}`);
  }

  const { mutate } = useMutation(({ feedbackId, isCheck }) =>
    axiosInstance.patch(`/feedbacks/${feedbackId}?isCheck=${isCheck}`),
  );

  //* handlers
  function openDetailFeedbackHandler(e) {
    const indexOfDataId = feedbackIsClicked.indexOf(e.currentTarget.dataset.id);

    if (indexOfDataId !== -1) {
      setFeedbackIsClicked([
        ...feedbackIsClicked.slice(0, indexOfDataId),
        ...feedbackIsClicked.slice(indexOfDataId + 1),
      ]);
    } else {
      setFeedbackIsClicked([...feedbackIsClicked, e.currentTarget.dataset.id]);
    }
  }

  function checkFeedbackHandler(e) {
    const feedbackId = e.target.dataset.feedbackid;
    const isCheck = e.target.dataset.ischeck;

    mutate({ feedbackId, isCheck });
  }

  function searchUserIdHandler(e) {
    const pageState = searchParams.get('page');
    setSearchParams(`page=${pageState}&userId=${searchLetters}`);
    setSearchLetters('');
  }

  function typeSearchInputHandler(e) {
    setSearchLetters(e.target.value);
  }

  return (
    <>
      <AdminHeader />

      <JustifyCenter>
        <FeedbackHeader>
          <Title>피드백</Title>

          <SearchContainer>
            <SearchId
              value={searchLetters}
              onChange={typeSearchInputHandler}
              placeholder='계정으로 검색'></SearchId>
            <SearchImg
              onClick={searchUserIdHandler}
              src={searchRed}
              alt='검색 버튼'
            />
          </SearchContainer>
        </FeedbackHeader>

        <StandardHeader>
          <StandardNumber>번호</StandardNumber>
          <StandardAccount>계정</StandardAccount>
          <StandardFeedback>피드백</StandardFeedback>
          <StandardScore>평점</StandardScore>
          <StandardUpdateDate>등록일</StandardUpdateDate>
          <StandardConfirmDate>확인일</StandardConfirmDate>
          <StandardAction>액션</StandardAction>
        </StandardHeader>

        <ReviewUl>
          {!isFeedbacksDataLoading &&
            feedbacksData?.data.content.map(
              ({ id, email, content, rating, ceateAt, updatedAt, action }) => (
                <ReviewLi key={id}>
                  <FeedbackContainer
                    feedbackIsClicked={feedbackIsClicked.includes(`${id}`)}
                    onClick={openDetailFeedbackHandler}
                    data-id={`${id}`}>
                    <FeedbackNumber>{id}</FeedbackNumber>
                    <FeedbackAccount>{email}</FeedbackAccount>
                    <FeedbackFeedback>
                      {content.slice(0, 22) + '...'}
                    </FeedbackFeedback>
                    <FeedbackScore>{Number(rating).toFixed(1)}</FeedbackScore>
                    <FeedbackUpdateDate>{ceateAt}</FeedbackUpdateDate>
                    <FeedbackConfirmDate>{updatedAt}</FeedbackConfirmDate>
                    <FeedbackAction>{action}</FeedbackAction>
                  </FeedbackContainer>

                  <FeedbackDetailContainer>
                    <FeedbackContents>{content}</FeedbackContents>
                    <ConfirmButtonContainer>
                      <ConfirmButton
                        onClick={checkFeedbackHandler}
                        data-ischeck={true}
                        data-feedbackid={email}>
                        확인하기
                      </ConfirmButton>
                      <EmailButton
                        onClick={checkFeedbackHandler}
                        data-ischeck={false}
                        data-feedbackid={email}>
                        이메일 전송
                      </EmailButton>
                    </ConfirmButtonContainer>
                  </FeedbackDetailContainer>
                </ReviewLi>
              ),
            )}
        </ReviewUl>

        {/* pageState, setPageState, totalPages, curPage  */}
        <Pagination
          pageState={pageState}
          setPageState={setPageState}
          totalPages={feedbacksData?.data.totalPages}
          curPage={feedbacksData?.data.number}
        />
      </JustifyCenter>
    </>
  );
};

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  padding: 13px 28px;
  border-radius: 100px;

  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;
`;

const EmailButton = styled(Button)`
  background: #000000;
`;

const ConfirmButton = styled(Button)`
  background: #e72847;
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;

  gap: 16px;
`;

const FeedbackContents = styled.p`
  width: 70%;

  padding: 28px 183px 28px 115px;
  border-right: 1px solid #2a2a2a;

  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;
  line-height: 22px;
`;

const FeedbackDetailContainer = styled.div`
  display: none;
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
1, 3, 4, 1, 1.5, 1.5, 1.5;

const FeedbackNumber = styled(ReviewSpan)`
  flex: 1;
`;
const FeedbackAccount = styled(ReviewSpan)`
  flex: 3;
`;
const FeedbackFeedback = styled(ReviewSpan)`
  flex: 4;
`;
const FeedbackScore = styled(ReviewSpan)`
  flex: 1;
  text-align: center;
`;
const FeedbackUpdateDate = styled(ReviewSpan)`
  flex: 1.5;
  text-align: center;
`;
const FeedbackConfirmDate = styled(ReviewSpan)`
  flex: 1.5;
  text-align: center;
`;
const FeedbackAction = styled(ReviewSpan)`
  flex: 1.5;
  text-align: center;
`;

const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 36px;
  width: 100%;
  border: 1px solid #2a2a2a;

  ${({ feedbackIsClicked }) =>
    feedbackIsClicked
      ? css`
          background: #1f2026;

          & + div {
            display: flex;
          }
        `
      : css`
          background-color: transparent;

          & + div {
            display: none;
          }
        `}
`;

const ReviewLi = styled.li`
  cursor: pointer;
  list-style: none;

  margin-top: 16px;
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

const StandardNumber = styled(StandardName)`
  flex: 1;
`;
const StandardAccount = styled(StandardName)`
  flex: 3;
`;
const StandardFeedback = styled(StandardName)`
  flex: 4;
`;
const StandardScore = styled(StandardName)`
  flex: 1;
  text-align: center;
`;
const StandardUpdateDate = styled(StandardName)`
  flex: 1.5;
  text-align: center;
`;
const StandardConfirmDate = styled(StandardName)`
  flex: 1.5;
  text-align: center;
`;
const StandardAction = styled(StandardName)`
  flex: 1.5;
  text-align: center;
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

const JustifyCenter = styled.div`
  width: 80%;
  margin: 0 auto;
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

const SearchContainer = styled.div`
  margin-left: auto;
  position: relative;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffffff;

  margin-right: 20px;
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;

  margin-top: 60px;
`;

export default AdminFeedbackTemplate;
