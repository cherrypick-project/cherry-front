import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { axiosInstance } from '../../../api';

import redStart from '../../../assets/img/star1_red.svg';
import AdminHeader from '../../molecules/admin/header/AdminHeader';

const AdminReviewDetailTemplate = () => {
  const [userIdSearchParam, setUserIdSearchParam] = useSearchParams();
  const userId = userIdSearchParam.get('userId');

  const { data: reviewDetailData, isLoading: isReviewDetailDataLoading } =
    useQuery(['reviewDetail', userId], () =>
      axiosInstance.get(`/reviews/${userId}`),
    );

  // 리뷰 승인 API
  const { mutate: confirmMutate } = useMutation(() =>
    axiosInstance.patch(`/reviews/${userId}`),
  );

  function reviewConfirmHandler(e) {
    confirmMutate();
  }

  // ! status, recommendation, costPerformance 데이터 종류 물어본뒤 추가 작업

  return (
    <Container>
      <Title>리뷰 상세</Title>
      {!isReviewDetailDataLoading &&
        reviewDetailData.data.map(
          ({
            id,
            email,
            lectureName,
            createdAt,
            status,
            modifiedAt,
            rating,
            recommendation,
            costPerformance,
            oneLineComment,
            strengthComment,
            weaknessComment,
            job,
            career,
          }) => (
            <>
              <StandardsUl>
                <StandardLi>
                  <StandardName>번호</StandardName>
                  <StandardContent>{id}</StandardContent>
                </StandardLi>
                <StandardLi>
                  <StandardName>계정</StandardName>
                  <StandardContent>{email}</StandardContent>
                </StandardLi>
                <StandardLi>
                  <StandardName>강의명</StandardName>
                  <StandardContent>{lectureName}</StandardContent>
                </StandardLi>
                <StandardLi>
                  <StandardName>등록일</StandardName>
                  <StandardContent>{createdAt}</StandardContent>
                </StandardLi>
                <StandardLi>
                  <StandardName>리뷰상태</StandardName>
                  <StandardContent state={'대기'}>대기</StandardContent>
                </StandardLi>
                <StandardLi>
                  <StandardName>확인일</StandardName>
                  <StandardContent>{modifiedAt}</StandardContent>
                </StandardLi>
              </StandardsUl>
              <ReviewContainer>
                <ReviewHeader>
                  <Star src={redStart} alt='빨간색 별' />
                  <ReviewScore>{Number(rating).toFixed(1)}</ReviewScore>
                  <ReviewState>추천해요!</ReviewState>
                  <ReviewState>매우 만족</ReviewState>
                  <ReviewCreatedDate>{createdAt}</ReviewCreatedDate>
                </ReviewHeader>
                <ContentContainer>
                  <ContentTitle>{oneLineComment}</ContentTitle>
                  <PropsConsName>장점</PropsConsName>
                  <PropsConsContent>{strengthComment}</PropsConsContent>
                  <PropsConsName>단점</PropsConsName>
                  <PropsConsContent>{weaknessComment}</PropsConsContent>
                </ContentContainer>
                <UserInfoContainer>
                  <UserInfo>{job}</UserInfo>
                  <UserInfo>{career}</UserInfo>
                </UserInfoContainer>
              </ReviewContainer>
              <ConfirmContainer>
                <ConfirmButton red onClick={reviewConfirmHandler}>
                  승인하기
                </ConfirmButton>
                <ConfirmButton>거절하기</ConfirmButton>
              </ConfirmContainer>
            </>
          ),
        )}
    </Container>
  );
};

const ConfirmButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100px;
  height: 40px;

  padding: 13px 24px;

  background-color: #000000;

  ${({ red }) =>
    red &&
    css`
      background-color: #e72847;
    `}

  border-radius: 100px;

  font-weight: 700;
  font-size: 0.875rem;
  color: #ffffff;
  text-align: center;
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 16px;

  margin-top: 48px;
  margin-bottom: 80px;
`;

const UserInfo = styled.span`
  width: 48px;
  height: 24px;

  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  text-align: center;

  background-color: #000000;
  border-radius: 3px;

  padding: 6px 8px;
  margin-right: 4px;
`;

const UserInfoContainer = styled.div`
  display: flex;
`;

const PropsConsContent = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.5;

  line-height: 20px;

  margin-bottom: 28px;
`;

const PropsConsName = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: #ffffff;
  opacity: 0.9;

  margin-bottom: 12px;
`;

const ContentTitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.9;

  margin-bottom: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 28px;

  & > p:last-of-type {
    margin-bottom: 20px;
  }
`;

const ReviewCreatedDate = styled.span`
  font-weight: 600;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.8;

  margin-left: auto;
`;

const ReviewState = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;

  margin-right: 22px;
`;

const ReviewScore = styled.span`
  font-weight: 600;
  font-size: 2rem;
  color: #ffffff;

  margin-right: 24px;
`;

const Star = styled.img`
  width: 15.79px;
  height: 15.79px;

  margin-right: 16px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewContainer = styled.div`
  width: 100%;

  padding: 43px 97px;
  margin-top: 48px;

  background-color: #1f2026;
  border: 1px solid #2a2a2a;
`;

const StandardContent = styled.span`
  font-weight: 600;
  font-size: 1rem;

  ${({ state }) =>
    state === '대기'
      ? css`
          color: #feb700;
        `
      : state === '거부'
      ? css`
          color: #e72847;
        `
      : state === '승인'
      ? css`
          color: #00ff29;
        `
      : css`
          color: #ffffff;
        `}

  margin-left: 40px;
`;

const StandardName = styled.span`
  width: 56px;

  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.8;
`;

const StandardLi = styled.li`
  list-style: none;
  display: flex;

  width: 100%;
  padding: 24px 0;

  border-bottom: 1px solid #2a2a2a;
`;

const StandardsUl = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 36px;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffffff;
  opacity: 0.8;

  margin-top: 60px;
`;

export default AdminReviewDetailTemplate;
