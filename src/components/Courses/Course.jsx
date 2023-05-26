import React, { useState } from "react";
import { CourseBreakDown } from "./index";
import { Button } from "../index";
const Course = ({ course }) => {
  const [courseOpen, setCourseOpen] = useState(false);
  const toggleCourseOpen = (e) => {
    e.preventDefault();
    setCourseOpen(!courseOpen);
    console.log(courseOpen)
  };
  const courseBreakdown = courseOpen ? course.course_breakdown :  course.course_breakdown.slice(0, 3);

  return (
    <>
      <div className="course_title rounded-lg py-4 ">
        <div className="course_title_column pl-4 ">
          <div className="font-extralight">{course.classification}</div>
          <div>
            <h2 className="font-medium text-lg">{course.name}</h2>
          </div>
          <div>
            <span className="text-warning font-bold text-lg">KES. {course.price}</span>
          </div>
        </div>
        <div className="course_title_img_holder">
          {/* <img src={course.course_avatart} alt={course.name} className='bg-information w-80' /> */}
        </div>
      </div>
      <div className="course_description py-8">
        <div className="about_course pb-4">
          <div  className="about_course_column">
            <h3 className="font-bold text-warning">About Course</h3>
          </div>
          <div className="about_course_column column-two">
            <span className="text-warning">&#9733;</span>
            <span className="font-bold mx-2">4.4</span>
            <span className="font-extralight">(700)</span>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            odit itaque ut doloribus, nesciunt labore id doloremque saepe
            aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
            exercitationem quod suscipit!
          </p>
        </div>
      </div>
      <div className="course_and_course_details_toggle_button pb-4">
        <div className="division_column">
          <h3 className="text-warning font-bold text-lg">Course</h3>
        </div>
        <div className="division_column column_with_toggle_btn mr-2">
          <Button onClick={(e) => toggleCourseOpen(e)}>
            {
              courseOpen ? "See Less" : "See All"
            }
          </Button>
        </div>
      </div>
      <div className="course_breakdown py-1">
        {courseBreakdown.map((breakdown, index) => {
          return <CourseBreakDown breakdown={breakdown} key={index} />;
        })}
      </div>
    </>
  );
};

export default Course;
