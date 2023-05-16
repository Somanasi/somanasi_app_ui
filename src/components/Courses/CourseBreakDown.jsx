import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import  WeeklyLessons  from './WeeklyLessons';

const CourseBreakDown = ({ breakdown }) => {
  return (
    <div>
      <div>
        <div>
          <h2>{breakdown.tag}</h2>
        </div>
        <div>
          <GoChevronRight size={30} />
        </div>
      </div>
      <div>
        {breakdown.lessons.map((lesson, index) => {
          return <WeeklyLessons lesson={lesson} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CourseBreakDown;
