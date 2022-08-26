import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { axiosInstance } from '../../../api';

import redStart from '../../../assets/img/star1_red.svg';
import AdminHeader from '../../molecules/admin/header/AdminHeader';

const AdminStatisticsTemplate = () => {
  // /users/statistics
  const { data: statisticsData, isLoading: isStatisticsDataLoading } = useQuery(
    ['usersStatistics'],
    () => axiosInstance.get('/users/statistics'),
  );

  return (
    <>
      <AdminHeader />
      {!isStatisticsDataLoading &&
        statisticsData.data.map(
          ({
            userCount,
            feedbackRating,
            feedbackCount,
            frontend,
            backend,
            student,
            lessThan1Years,
            lessThan3Years,
            lessThan6Years,
            moreThan7Years,
            search,
            friend,
            sns,
            cafe,
            blog,
            etc,
          }) => (
            <>
              <GrayBox>
                <LeftBox>
                  <Title>통계 분석</Title>
                  <TotalUserName>총 회원 수 </TotalUserName>
                  <FlexRow>
                    <TotalUserContent>{userCount}명</TotalUserContent>
                    <GrayRadius>
                      <Star src={redStart} alt='별점' />
                      <StarScore>{`${Number(feedbackRating).toFixed(
                        1,
                      )}(${feedbackCount}명)`}</StarScore>
                    </GrayRadius>
                  </FlexRow>
                </LeftBox>
                <RightBox>
                  <JobContainer>
                    <JobMajorHeading>직무</JobMajorHeading>
                    <JobStatisticsResultsUl>
                      <JobStatisticsResultsLi>
                        <JobResultSubHeading>프론트엔드</JobResultSubHeading>
                        <JobResultContent>{`${frontend.percent}%(${frontend.count}명)`}</JobResultContent>
                      </JobStatisticsResultsLi>
                      <JobStatisticsResultsLi>
                        <JobResultSubHeading>백엔드</JobResultSubHeading>
                        <JobResultContent>{`${backend.percent}%(${backend.count}명)`}</JobResultContent>
                      </JobStatisticsResultsLi>
                    </JobStatisticsResultsUl>
                  </JobContainer>
                </RightBox>
              </GrayBox>

              <BottomBox>
                <StatisticsContainer>
                  <StatisticsMajorHeading>경력</StatisticsMajorHeading>
                  <StatisticsUl>
                    <StatisticsLi>
                      <StatisticsSubHeading>학생</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${student.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${student.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>1년차 미만</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${lessThan1Years.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${lessThan1Years.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>1~3년차</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${lessThan3Years.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${lessThan3Years.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>3~6년차</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${lessThan6Years.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${lessThan6Years.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>7년 이상</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${moreThan7Years.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${moreThan7Years.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>
                  </StatisticsUl>
                </StatisticsContainer>

                <StatisticsContainer>
                  <StatisticsMajorHeading>알게 된 경로</StatisticsMajorHeading>
                  <StatisticsUl>
                    <StatisticsLi>
                      <StatisticsSubHeading>검색</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${search.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${search.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>지인</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${friend.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${friend.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>SNS</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${sns.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${sns.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>카페</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${cafe.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${cafe.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>블로그</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${blog.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${blog.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>

                    <StatisticsLi>
                      <StatisticsSubHeading>기타</StatisticsSubHeading>
                      <StatisticsContentsPercentage>
                        {`${etc.percent}%`}
                      </StatisticsContentsPercentage>
                      <StatisticsContentsCount>{`(${etc.count}명)`}</StatisticsContentsCount>
                    </StatisticsLi>
                  </StatisticsUl>
                </StatisticsContainer>
              </BottomBox>
            </>
          ),
        )}
    </>
  );
};

const JobContainer = styled.div`
  margin-left: 5.8333vw;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

const StatisticsContentsCount = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

const StatisticsContentsPercentage = styled.span`
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
`;

const StatisticsSubHeading = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.8;

  margin-bottom: 36px;
`;

const StatisticsLi = styled.li`
  list-style: none;

  width: 181px;
  padding: 30px 25px;

  opacity: 0.9;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
`;

const StatisticsUl = styled.ul`
  display: flex;

  gap: 21px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const StatisticsMajorHeading = styled.h4`
  font-weight: 400;
  font-size: 1.25rem;
  color: #ffffff;

  margin-bottom: 20px;
`;

const StatisticsContainer = styled.div`
  margin-top: 80px;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const JobResultContent = styled.p`
  font-weight: 600;
  font-size: 1.75rem;
  color: #ffffff;

  margin-top: 16px;
`;

const JobResultSubHeading = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  opacity: 0.8;
`;

const JobStatisticsResultsLi = styled.li`
  list-style: none;

  width: 230px;

  background-color: #33343b;
  opacity: 0.9;
  border-radius: 8px;

  padding: 26px 27px 20px 27px;

  @media (max-width: 900px) {
  }
`;

const JobStatisticsResultsUl = styled.ul`
  display: flex;

  gap: 28px;
`;

const JobMajorHeading = styled.h4`
  font-weight: 600;
  font-size: 1.25rem;
  color: #ffffff;

  margin-bottom: 32px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;

  padding: 222px 0 60px 10px;

  @media (max-width: 900px) {
    width: 62.5vw;

    padding: 0;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const StarScore = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  color: #ffffff;
`;

const Star = styled.img`
  display: inline-block;

  width: 15.79px;
  height: 15.79px;

  margin-right: 16px;
`;

const GrayRadius = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 172px;
  height: 48px;

  background-color: #33343b;
  opacity: 0.9;
  border-radius: 100px;
`;

const TotalUserContent = styled.p`
  font-weight: 600;
  font-size: 3.25rem;
  color: #ffffff;

  margin-right: 16px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const TotalUserName = styled.h4`
  margin-top: 193px;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 1.125rem;
  color: #ffffff;
  opacity: 0.8;

  @media (max-width: 900px) {
    margin-top: 100px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.25rem;
  color: #ffffff;
`;

const LeftBox = styled.div`
  display: inline-flex;
  flex-direction: column;

  width: 40%;

  padding: 60px 0;

  border-right: 1px solid #2a2a2a;

  @media (max-width: 900px) {
    width: 62.5vw;

    border-right: none;
    padding: 0;
    padding-bottom: 50px;
    padding-top: 50px;

    border-bottom: 1px solid #2a2a2a;
  }
`;

const GrayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: auto;

  background-color: #1f2026;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default AdminStatisticsTemplate;
