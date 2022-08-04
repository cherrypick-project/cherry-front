import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { axiosInstance } from '../../../api';
import { responsive } from '../../../style/responsive';
import Footer from '../../molecules/footer/Footer';

import Header from '../../molecules/header/Header';
import Feedback from '../../UI/atoms/feedback/Feedback';
import LectureCard from '../../UI/atoms/lectureCard/LectureCard';
import MobileLectureCard from '../../UI/atoms/mobileLectureCard/MobileLectureCard';
import Pagination from '../../UI/atoms/pagination/Pagination';
import Sorts from '../../UI/atoms/sorts/Sorts';

const SearchResultTemplate = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let searchName = searchParams.get('query');

  let [pageState, setPageState] = useState(1);
  let [sortState, setSortState] = useState('최신순');

  // 이제 해야하는 것은 query를 가져와서 useQuery의 키로 넣어주면 된다.
  // 다행이도 setSearchParams를 사용하면 컴포넌트가 업데이트 되는 모양이다. ㅎ휴휴휴
  // -sort - page - size - searchName
  const { data: lecturesData, isLoading: isLecturesDataLoading } = useQuery(
    [searchName, sortState, pageState],
    async ({ queryKey }) => {
      let sortState = queryKey[1];
      const pageState = queryKey[2];
      const searchName = queryKey[0];

      if (sortState === '최신순') {
        sortState = 'createAt';
      } else if (sortState === '인기순') {
        sortState = 'reviewCount,desc';
      } else if (sortState === '가격↑') {
        sortState = 'price,desc';
      } else if (sortState === '가격↓') {
        sortState = 'price,asc';
      }

      let res = await axiosInstance(
        `/lectures?sort=${sortState}&page=${pageState}&size=9&searchName=${searchName}`,
      );

      return res;
    },
    { keepPreviousData: true },
  );

  // LectureCard 컴포넌트에 데이터 props 전달해주어야함
  // LectureCard가 four인 경우 props 어떤것을 전달해야하는지 파악하기.

  // ! 웹 게임 검색결과 Text도 반드시 연결해주기

  return (
    <Container>
      <SearchHeader notMain login />
      <SearchResultContainer>
        <SearchTitle>웹 게임 검색결과 0개</SearchTitle>

        <SearchSorts
          sortState={sortState}
          setSortState={setSortState}
          setPageState={setPageState}
        />

        <LectureCardsContainer>
          {!isLecturesDataLoading &&
            lecturesData.data.content.map((lectureData) => (
              <LectureCardLi key={lectureData.id}>
                <LectureCard lectureData={lectureData} four />
              </LectureCardLi>
            ))}
        </LectureCardsContainer>

        {/* <MobileLectureCards>
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
          <MobileLectureCard />
        </MobileLectureCards> */}

        {!isLecturesDataLoading && (
          <Pagination
            pageState={pageState}
            setPageState={setPageState}
            totalPages={lecturesData.data.totalPages}
            curPage={lecturesData.data.number}
          />
        )}

        <SearchFeedback />
      </SearchResultContainer>

      <SearchFooter />
    </Container>
  );
};

const LectureCardLi = styled.li`
  display: inline-block;
`;

const SearchFeedback = styled(Feedback)`
  position: absolute;

  bottom: -119.08px;
  left: -5.4167vw;

  @media ${responsive.tablet} {
    bottom: -65px;
    left: 0;
  }

  @media ${responsive.mobile} {
    bottom: -60.3px;
    left: 80vw;
  }
`;

const Container = styled.div``;

const SearchFooter = styled(Footer)`
  margin-top: 130px;

  @media ${responsive.tablet} {
    margin-top: 80px;
  }

  @media ${responsive.mobile} {
    margin-top: 72px;
  }
`;

const MobileLectureCards = styled.div`
  display: none;

  @media ${responsive.mobile} {
    display: block;
    margin-top: 16px;

    & > div {
      padding: 22px 0px;
      border-bottom: 1px solid #2a2a2a;
    }

    & > div:first-of-type {
      padding-top: 0;
    }

    & > div:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

const SearchHeader = styled(Header)`
  position: relative;
  z-index: 100;
`;

const LectureCardsContainer = styled.ul`
  margin-top: 28px;

  & > li:nth-of-type(n + 5) {
    margin-top: 1.6667vw;
  }

  & > li:not(:nth-of-type(4n)) {
    margin-right: 1.0417vw;
  }

  @media (max-width: 1440px) {
    & > li:not(:nth-of-type(4n)) {
      margin-right: 0;
    }
    & > li:nth-of-type(n + 5) {
      margin-top: 0;
    }

    & > li:not(:nth-of-type(3n)) {
      margin-right: 0.6944vw;
    }
    & > li:nth-of-type(n + 4) {
      margin-top: 1.6667vw;
    }
  }
  @media (max-width: 1000px) {
    & > li:not(:nth-of-type(3n)) {
      margin-right: 0;
    }
    & > li:nth-of-type(n + 4) {
      margin-top: 0;
    }

    & > li:not(:nth-of-type(2n)) {
      margin-right: 3vw;
    }
    & > li:nth-of-type(n + 3) {
      margin-top: 1.3889vw;
    }
  }

  @media ${responsive.tablet} {
    & > li:not(:nth-of-type(2n)) {
      margin-right: 0;
    }
    & > li:nth-of-type(n + 3) {
      margin-top: 0;
    }

    & > li:not(:nth-of-type(3n)) {
      margin-right: 1.3021vw;
    }
    & > li:nth-of-type(n + 4) {
      margin-top: 4.1667vw;
    }
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

const SearchSorts = styled(Sorts)`
  margin-left: auto;
  margin-top: 20px;

  @media ${responsive.mobile} {
    margin-top: 10px;
  }
`;

const SearchResultContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 62.5vw;
  margin: 0 auto;

  @media ${responsive.tablet} {
    width: 93.75vw;
  }

  @media ${responsive.mobile} {
    width: 88.8889vw;
  }
`;

const SearchTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #ffffff;

  padding: 81px 0 53px 0;
  border-bottom: 1px solid #2a2a2a;

  @media ${responsive.tablet} {
    padding: 49px 0 53px;
  }

  @media ${responsive.mobile} {
    padding: 49px 0 33px;
  }
`;

export default SearchResultTemplate;
