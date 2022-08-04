import React from 'react';
import styled, { css } from 'styled-components';
import { responsive } from '../../../../style/responsive';

const Pagination = ({ pageState, setPageState, totalPages, curPage }) => {
  function onClickPrev(e) {
    const divisorFiveRes = Math.floor(pageState / 5);
    setPageState((divisorFiveRes - 1) * 5 + 5);
  }
  function onClickNext(e) {
    const divisorFiveRes = Math.floor(pageState / 5);
    setPageState(divisorFiveRes * 5 + 6);
  }
  function onClickPaginationNumber(e) {
    setPageState(Number(e.target.innerText));
  }

  let paginationNumbers = [];

  let isLastPage = false;

  const divisorFiveRes = Math.floor(curPage / 5);

  if (divisorFiveRes * 5 + 4 < totalPages - 1) {
    // 현재 페이지 기준으로 보여질 수 있는 페이지 숫자들이 5개 라면(ex, 6,7,8,9,10)
    for (let i = 0; i < 5; i++) {
      paginationNumbers.push(divisorFiveRes * 5 + i + 1);
    }
  } else {
    // 현재 페이지 기준으로 보여질 수 있는 페이지 숫자들이 5개 이하라면(ex, 11,12,13(마지막 페이지))
    for (let i = 0; i < totalPages - 1 - divisorFiveRes * 5 + 1; i++) {
      paginationNumbers.push(divisorFiveRes * 5 + i + 1);
    }
  }

  if (totalPages - 1 - divisorFiveRes * 5 < 5) {
    isLastPage = true;
  } else {
    isLastPage = false;
  }

  return (
    <PaginationContainer>
      <PcPagination>
        <Prev IsFirstPage={pageState < 6} onClick={onClickPrev}>
          ← PREV
        </Prev>
        <PaginationNumberContainer>
          {paginationNumbers.map((number) => (
            <PaginationNumber
              key={number}
              isCurPage={Number(number) === pageState}
              onClick={onClickPaginationNumber}>
              {number}
            </PaginationNumber>
          ))}
        </PaginationNumberContainer>
        <Next isLastPage={isLastPage} onClick={onClickNext}>
          Next →
        </Next>
      </PcPagination>
      <TabletMobilePagination>강의 전체 보기 ↓</TabletMobilePagination>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  margin-top: 90px;

  @media ${responsive.tablet} {
    margin-top: 32px;
  }

  @media ${responsive.mobile} {
    margin-top: 32px;
  }
`;

const PcPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${responsive.tablet} {
    display: none;
  }

  @media ${responsive.mobile} {
    display: none;
  }
`;

const PaginationNumberContainer = styled.div`
  display: flex;

  & > a:not(:last-of-type) {
    margin-right: 12px;
  }
`;

const Next = styled.a`
  cursor: pointer;

  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin-left: 20px;

  ${({ isLastPage }) =>
    isLastPage
      ? css`
          cursor: default;
          color: #808080;
          pointer-events: none;
        `
      : css`
          cursor: pointer;
          color: #ffffff;
          pointer-events: auto;
        `}
`;

const PaginationNumber = styled.a`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  font-weight: 500;
  font-size: 0.75rem;
  color: #ffffff;

  &:hover {
    border-radius: 50%;
    background-color: #1f2026;
    color: #e72847;
  }

  ${({ isCurPage }) =>
    isCurPage
      ? css`
          border-radius: 50%;
          background-color: #1f2026;
          color: #e72847;
        `
      : css``}
`;

const Prev = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #ffffff;
  opacity: 0.9;

  margin-right: 20px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${({ IsFirstPage }) =>
    IsFirstPage
      ? css`
          cursor: default;
          color: #808080;
          pointer-events: none;
        `
      : css`
          cursor: pointer;
          color: #ffffff;
          pointer-events: auto;
        `};
`;

const TabletMobilePagination = styled.div`
  display: none;

  @media ${responsive.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 93.75vw;
    height: 44px;

    background-color: #1f2026;
    border-radius: 3px;

    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
  }

  @media ${responsive.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 88.6111vw;
    height: 44px;

    background-color: #1f2026;
    border-radius: 3px;

    font-weight: 400;
    font-size: 0.75rem;
    color: #ffffff;
  }
`;

export default Pagination;
