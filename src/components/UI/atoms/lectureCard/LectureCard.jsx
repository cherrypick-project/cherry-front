import React from 'react';
import FourLectureCard from './FourLectureCard';
import ThreeLectureCard from './ThreeLectureCard';

const LectureCard = ({
  three,
  four,
  className,
  lectureData,
  rankSrc,
  category,
  page,
  sort,
  categoryId,
  searchName,
}) => {
  // three는 메인페이지 강의 카드들
  // four는 검색페이지, 마이페이지 카드들
  return (
    <>
      {three && (
        <ThreeLectureCard
          page={page}
          sort={sort}
          categoryId={categoryId}
          category={category}
          rankSrc={rankSrc}
          lectureData={lectureData}
          className={className}
        />
      )}
      {four && (
        <FourLectureCard
          page={page}
          sort={sort}
          searchName={searchName}
          lectureData={lectureData}
          className={className}
        />
      )}
    </>
  );
};

export default LectureCard;
