import React, { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import  WeeklyLessons  from './WeeklyLessons';

const CourseBreakDown = ({ breakdown }) => {
  const [seeLessons, setSeeLessons] = useState(false);
  
  const handleLessonView = (event) => {
    event.preventDefault();
    setSeeLessons(!seeLessons);
  };

  return (
    <div className='course_breakdown_card py-2 rounded-lg'>
      <div onClick={handleLessonView} className='course_breakdown_card_navigation'>
        <div className='course_breakdown_card_navigation_column tag pl-1'>
          <h2 className='font-bold text-lg'>{breakdown.tag}</h2>
        </div>
        <div className='course_breakdown_card_navigation_column icon pr-2'>
          <GoChevronRight size={30} className='text-warning' />
        </div>
      </div>
      {
        seeLessons ?
        <div>
        {breakdown.lessons.map((lesson, index) => {
          return <WeeklyLessons lesson={lesson} key={index} />;
        })}
      </div>
      : ""
      }
    </div>
  );
};

export default CourseBreakDown;
