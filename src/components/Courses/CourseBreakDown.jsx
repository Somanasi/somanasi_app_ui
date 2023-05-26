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
    <div className='course_breakdown_card'>
      <div className='course_breakdown_card_navigation'>
        <div className='tag'>
          <h2 className='font-bold text-lg'>{breakdown.tag}</h2>
        </div>
        <div>
          <GoChevronRight size={30} />
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
