import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { GoChevronRight, GoChevronUp } from 'react-icons/go';
import  WeeklyLessons  from './WeeklyLessons';

const CourseBreakDown = ({ breakdown }) => {
  const [seeLessons, setSeeLessons] = useState(false);
  const params = useParams();
  const handleLessonView = (event) => {
    event.preventDefault();
    setSeeLessons(!seeLessons);
  };

  return (
    <div className='course_breakdown_card px-2 py-2 rounded-lg'>
      <div onClick={handleLessonView} className='course_breakdown_card_navigation'>
        <div className='course_breakdown_card_navigation_column tag pl-1'>
          <h2 className='font-bold text-lg'>{breakdown.tag}</h2>
        </div>
        <div className='course_breakdown_card_navigation_column icon pr-2'>
         {
          seeLessons ? 
          <GoChevronUp size={30} className='text-warning' />
          :
          <GoChevronRight size={30} className='text-warning' />
         }
        </div>
      </div>
      {
        seeLessons ?
        <div className='course_breakdown_card_lessons py-2 '>
        {breakdown.lessons.map((lesson, index) => {
          return <Link to={"/courses/"+params.id+"/"+lesson.id+"/"+breakdown.tag}><WeeklyLessons lesson={lesson} key={index} /></Link>;
        })}
        <Link to={"/courses/"+params.id+"/quizes/"+breakdown.tag}>{breakdown.tag} Course Quizes</Link>
      </div>
      : ""
      }
    </div>
  );
};

export default CourseBreakDown;
