import React, { useState } from 'react';
import { GoChevronRight, GoChevronUp } from 'react-icons/go';
import  WeeklyLessons  from './WeeklyLessons';

const CourseBreakDown = ({ breakdown, index }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLessonView = (index) => {
    console.log("index", index, "active", activeIndex)
    setActiveIndex(index);
    console.log("index", index, "active", activeIndex)
  };

  return (
    <div className='course_breakdown_card px-2 py-2 rounded-lg'>
      <div onClick={() => handleLessonView(index)} className='course_breakdown_card_navigation'>
        <div className='course_breakdown_card_navigation_column tag pl-1'>
          <h2 className='font-bold text-lg'>{breakdown.tag}</h2>
        </div>
        <div className='course_breakdown_card_navigation_column icon pr-2'>
          {activeIndex === index ? (
            <GoChevronUp size={30} className='text-warning' />
          ) : (
            <GoChevronRight size={30} className='text-warning' />
          )}
        </div>
      </div>
      {activeIndex === index && (
        <div>
          {breakdown.lessons.map((lesson, index) => {
            return <WeeklyLessons lesson={lesson} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CourseBreakDown;
