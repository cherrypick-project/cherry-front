import React, { useState } from 'react';
import styled from 'styled-components';

import palette from '../../style/palette';
import { responsive } from '../../style/responsive';
import feedbacklogo from '../../assets/img/feedback.png';

import SigninStep from '../molecules/signin/SigninStep';
import JoinSubmitButton from '../UI/atoms/Join/JoinSubmitButton';
import DetailInfoButton from '../UI/atoms/Join/DetailInfoButton';
import Footer from '../molecules/footer/Footer';

const SignUpTemplate = () => {
  const [userInfo, setUserInfo] = useState({
    currentJob: '',
    career: '',
    knownPath: '',
  });

  const selectCurrentJob = (e) => {
    setUserInfo({ ...userInfo, currentJob: e.target.dataset.value });
  };

  const selectCareer = (e) => {
    setUserInfo({ ...userInfo, career: e.target.dataset.value });
  };

  const selectKnownPath = (e) => {
    setUserInfo({ ...userInfo, knownPath: e.target.dataset.value });
  };

  const checkIsSelected = () => {
    let allChecked = true;
    for (let key in userInfo) {
      if (!userInfo[key]) allChecked = false;
    }
    return allChecked;
  };
  console.log(checkIsSelected());

  return (
    <Container>
      <CenterWrapper>
        <CenterBox>
          <SigninStep step='first' />

          <Title>
            <p>기본 정보를</p>
            <p>선택해주세요.</p>
          </Title>

          <QuestionContainer>
            <QuestionBox>
              <SubTitle>
                <p>1. 현재 직무</p>
                <p>선택한 직무가 메인 페이지에 보여집니다.</p>
              </SubTitle>

              <DetailInfoContainer>
                <DetailInfoButton
                  value='frontend'
                  select={userInfo.currentJob}
                  handleClick={selectCurrentJob}>
                  프론트엔드
                </DetailInfoButton>
                <DetailInfoButton
                  value='backend'
                  select={userInfo.currentJob}
                  handleClick={selectCurrentJob}>
                  백엔드
                </DetailInfoButton>
              </DetailInfoContainer>
            </QuestionBox>

            <QuestionBox>
              <SubTitle>
                <p>2. 경력</p>
              </SubTitle>
              <DetailInfoContainer>
                <DetailInfoButton
                  value='student'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  학생
                </DetailInfoButton>
                <DetailInfoButton
                  value='1year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  1년 미만
                </DetailInfoButton>
                <DetailInfoButton
                  value='3year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  1~3년차
                </DetailInfoButton>
                <DetailInfoButton
                  value='6year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  3~6년차
                </DetailInfoButton>
                <DetailInfoButton
                  value='7year'
                  handleClick={selectCareer}
                  select={userInfo.career}>
                  7년 이상
                </DetailInfoButton>
              </DetailInfoContainer>
            </QuestionBox>

            <QuestionBox>
              <SubTitle>
                <p>3. 알게 된 경로</p>
              </SubTitle>

              <DetailInfoContainer>
                <DetailInfoButton
                  value='search'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  검색
                </DetailInfoButton>
                <DetailInfoButton
                  value='friends'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  지인
                </DetailInfoButton>
                <DetailInfoButton
                  value='sns'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  SNS
                </DetailInfoButton>
                <DetailInfoButton
                  value='cafe'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  카페
                </DetailInfoButton>
                <DetailInfoButton
                  value='blog'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  블로그
                </DetailInfoButton>
                <DetailInfoButton
                  value='others'
                  handleClick={selectKnownPath}
                  select={userInfo.knownPath}>
                  기타
                </DetailInfoButton>
              </DetailInfoContainer>
            </QuestionBox>
          </QuestionContainer>
          <JoinSubmitButton clicked={!checkIsSelected()} />
        </CenterBox>
      </CenterWrapper>
      <Footer></Footer>
      <CherryPickLogo>
        <img src={feedbacklogo} alt='체리픽 로고' />
      </CherryPickLogo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: relative;

  background-color: ${palette.backgroundBlack};
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 195px 0 100px;
`;

const CenterBox = styled.div`
  width: 340px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 1.5rem;
  font-weight: 700;
  color: ${palette.text2};

  margin-top: 32px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 8px;

  margin: 24px 0 16px;
  padding: 28px 20px;

  background-color: #15161d;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & > p:nth-of-type(1) {
    color: ${palette.text2};
    font-size: 1rem;
    font-weight: 400;
  }

  & > p:nth-of-type(2) {
    color: ${palette.text5};
    font-size: 0.75rem;
  }
`;

const DetailInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CherryPickLogo = styled.div`
  position: absolute;
  left: 24px;
  bottom: 77px;

  & > img {
    width: 36px;
  }

  @media (max-width: 737px) {
    bottom: 150px;
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

export default SignUpTemplate;