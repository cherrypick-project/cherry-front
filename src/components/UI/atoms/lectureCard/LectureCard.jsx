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
}) => {
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
      {four && <FourLectureCard className={className} />}
    </>
  );
};

export default LectureCard;
