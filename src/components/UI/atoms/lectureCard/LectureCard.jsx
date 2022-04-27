import React from 'react';
import styled from 'styled-components';
import { responsive } from '../../../../style/responsive';

import lectureImg from '../../../../assets/img/lectureImg.png';
import palette from '../../../../style/palette';
import RegularAgencyBadge from '../badges/RegularAgencyBadge';
import OfflineBadge from '../badges/OfflineBadge';

import bookmark from '../../../../assets/img/bookmark.svg';
import bookmarkActive from '../../../../assets/img/bookmark_active.svg';

const Card = ({ className }) => {
  return (
    <LectureCard className={className}>
      <LectureImg src={lectureImg} alt='제로초 자바스크립트 강의' />
      <LectureOfflineBadge />
      <Bookmark />

      <InfoContainer>
        <LectureInfo>
          <div>
            <AgencyBadge>기관 groomedu</AgencyBadge>
            <AgencyBadge>강사 groomedu</AgencyBadge>
          </div>
          <HashTagContainer>
            <HashTag>#수강가능</HashTag>
            <HashTag>#Javascript</HashTag>
          </HashTagContainer>
          <LectureTitle>
            웹 게임을 만들며 배우는 JavaScript(자바스크립트)
          </LectureTitle>
          <AdditionalInfoContainer>
            <AdditionalInfoContent>무료</AdditionalInfoContent>
            <AdditionalInfo>
              <AdditionalInfoTitle>평점</AdditionalInfoTitle>
              <AdditionalInfoContent>측정중</AdditionalInfoContent>
            </AdditionalInfo>

            <AdditionalInfo>
              <AdditionalInfoTitle>리뷰</AdditionalInfoTitle>
              <AdditionalInfoContent>수집중</AdditionalInfoContent>
            </AdditionalInfo>
          </AdditionalInfoContainer>
        </LectureInfo>
      </InfoContainer>
    </LectureCard>
  );
};

const LectureOfflineBadge = styled(OfflineBadge)`
  position: absolute;

  /* top: 34px;
  left: 32px; */
  top: 1.7708vw;
  left: 1.6667vw;
  padding: 0.3125vw 0.4167vw 0.2604vw;
  font-size: 0.625rem;

  /* 1120px 부터 한줄에 카드 3개 존재 불가능 */
  @media (max-width: 1121px) {
    /* padding: 3.5px 4.667px 2.916px;

    top: 19.833px;
    left: 18.667px; */
    padding: 0.4665vw 0.6221vw 0.3888vw;

    top: 2.6436vw;
    left: 2.4881vw;
  }

  @media ${responsive.tablet} {
    /* 반응형 변경하기 */
    top: 1.17vw;
    left: 1.04vw;
    /* padding: 0.78vw 1.04vw 0.65vw; */
    padding: 4px 6px 3px;
  }

  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 667px) {
    top: 1.1664vw;
    left: 1.0369vw;
  }

  @media ${responsive.mobile} {
    /* 반응형 변경하기 */
    /* 14, 20px */
    top: 3.8889vw;
    left: 5.5556vw;
  }
`;

const Bookmark = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;

  background-image: url(${bookmark});
  background-repeat: no-repeat;
  background-size: cover;

  /* top: 24px;
  right: 32px; */
  top: 1.25vw;
  right: 1.6667vw;

  /* width: 40px;
  height: 40px; */
  width: 2.08vw;
  height: 2.08vw;

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1121px) {
    /* top: 14px;
    right: 18.667px;

    width: 23.289px;
    height: 23.289px; */

    top: 1.8661vw;
    right: 2.4881vw;

    width: 3.1047vw;
    height: 3.1047vw;
  }

  @media ${responsive.tablet} {
    /* top: 9px;
    right: 8px; */
    top: 1.17vw;
    right: 1.04vw;

    width: 28px;
    height: 28px;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    top: 1.1664vw;
    right: 1.0369vw;
  }

  @media ${responsive.mobile} {
    /* 14, 20px */
    top: 3.8889vw;
    right: 5.5556vw;

    width: 28px;
    height: 28px;
  }
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;

  & > div:nth-of-type(1) {
    padding-right: 12px;

    border-right: 1px solid rgba(196, 196, 196, 0.3);
  }

  & > div:nth-of-type(2) {
    padding-left: 12px;
  }

  @media ${responsive.tablet} {
    & > div:nth-of-type(1) {
      padding-right: 8px;

      border-right: 1px solid rgba(196, 196, 196, 0.3);
    }

    & > div:nth-of-type(2) {
      padding-left: 8px;
    }
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

const AdditionalInfoContent = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${palette.textWhite};
  margin-right: auto;

  /* 1440px 부터 폰트 크기 줄여줌 */
  @media (max-width: 1440px) {
    font-size: 0.875rem;
  }

  @media ${responsive.tablet} {
    font-size: 0.75rem;
  }

  @media ${responsive.mobile} {
    font-size: 0.875rem;
  }
`;

const AdditionalInfoTitle = styled.h4`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};

  opacity: 0.8;

  margin-right: 4px;

  /* 1440px 부터 폰트 크기 줄여줌 */
  @media (max-width: 1440px) {
    font-size: 0.75rem;
  }

  @media ${responsive.tablet} {
    font-size: 0.625rem;
    margin-right: 2px;
  }

  @media ${responsive.mobile} {
    font-size: 0.75rem;
    margin-right: 3px;
  }
`;

const LectureTitle = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${palette.textWhite};

  /* margin-top: 12px; */
  margin-top: 0.625vw;

  /* 1440px 부터 폰트 크기 줄여줌 */
  @media (max-width: 1440px) {
    font-size: 0.875rem;
  }

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1121px) {
    /* margin-top: 7px; */
    margin-top: 0.933vw;
  }

  @media ${responsive.tablet} {
    /* 반응형 구현하기 */
    font-size: 0.75rem;
    /* margin-top: 7px; */
    margin-top: 0.91vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    margin-top: 1.4243vw;
  }

  @media ${responsive.mobile} {
    /* 반응형 구현하기 */
    font-size: 0.875rem;
    /* margin-top: 7px; */
    margin-top: 2.2222vw;
  }
`;

const HashTagContainer = styled.div`
  /* margin-top: 30px; */
  margin-top: 1.5625vw;

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1121px) {
    /* margin-top: 17.5px; */
    margin-top: 2.3326vw;
  }

  /* 반응형 구현하기 */
  @media ${responsive.tablet} {
    /* margin-top: 16.24px; */
    margin-top: 2.11vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    margin-top: 3.5607vw;
  }

  @media ${responsive.mobile} {
    margin-top: 5.2778vw;
  }
`;

const HashTag = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${palette.textWhite};
  opacity: 0.8;

  margin-right: 8px;

  /* 1440px 부터 폰트 크기 줄여줌 */
  @media (max-width: 1440px) {
    font-size: 0.75rem;
  }

  @media ${responsive.tablet} {
    font-size: 0.625rem;
    margin-right: 4px;
  }

  @media ${responsive.mobile} {
    font-size: 0.75rem;
  }
`;

const AgencyBadge = styled(RegularAgencyBadge)`
  margin-right: 8px;
  padding: 0.4167vw;

  /* 1440px 부터 폰트 크기 줄여줌 */
  @media (max-width: 1440px) {
    font-size: 0.625rem;
  }

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1121px) {
    /* padding: 4.667px; */
    padding: 0.6221vw;
  }

  @media ${responsive.tablet} {
    /* 반응형 구현하기 */
    /* margin-right: 4px; */
    margin-right: 0.52vw;
    /* padding: 4.88px 3.25px; */
    padding: 0.64vw 0.42vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    margin-right: 1.1994vw;
    padding: 0.9496vw;
  }

  @media ${responsive.mobile} {
    margin-right: 2.2222vw;
    padding: 1.6667vw 1.1111vw;
  }
`;

const LectureImg = styled.img`
  /* width: 379px;
  height: 211px; */
  width: 19.74vw;
  height: 10.99vw;

  border-radius: 8px 8px 0 0;

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1121px) {
    /* width: 221.086px;
    height: 123.086px; */
    width: 29.4643vw;
    height: 16.4063vw;
  }

  @media ${responsive.tablet} {
    /* width: 232px;
    height: 129px; */
    width: 30.21vw;
    height: 16.8vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    width: 44.9775vw;
    height: 25.0445vw;
  }

  @media ${responsive.mobile} {
    width: 79.1667vw;
    height: 44.1667vw;
  }
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: column;

  /* width: 315px;
  height: 204px; */
  width: 16.41vw;
  height: 10.63vw;

  /* 1120px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 1121px) {
    /* width: 183.789px;
    height: 119.055px; */
    width: 24.4978vw;
    height: 15.8685vw;
  }

  @media ${responsive.tablet} {
    /* width: 208px;
    height: 131px; */
    width: 27.08vw;
    height: 17.06vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    width: 37.3958vw;
    height: 24.2234vw;
  }

  @media ${responsive.mobile} {
    width: 68.0556vw;
    height: 44.7222vw;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: 379px;
  height: 268px; */
  width: 19.74vw;
  height: 13.96vw;

  border-radius: 0 0 8px 8px;
  background: linear-gradient(180deg, #212121 76.67%, #000000 126.25%);

  /* 1120px 부터 더 작아질 수 없어서, 카드 크기 변경 */
  @media (max-width: 1121px) {
    /* width: 221.086px;
    height: 156.352px; */
    width: 29.4685vw;
    height: 20.8398vw;
  }

  @media ${responsive.tablet} {
    /* width: 232px;
    height: 163px; */
    width: 30.21vw;
    height: 21.22vw;
  }
  /* Tablet 665px 부터 더이상 크기를 줄이지 않음, 너무 작아짐 */
  @media (max-width: 666px) {
    width: 44.9775vw;
    height: 31.8123vw;
  }

  @media ${responsive.mobile} {
    width: 79.1667vw;
    height: 55.8333vw;
  }
`;

const LectureCard = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export default Card;
