import React, { useState } from "react";
import { Link } from "react-router-dom";

const LessonComponent = ({ lesson }) => {
  return (
    <>
      <div className="course_title rounded-lg py-4 ">
        <div className="course_title_column pl-4 ">
          <div className="font-extralight">{lesson.lesson}</div>
          <div>
            <h2 className="font-medium text-lg">{lesson.completionTime}</h2>
          </div>
        </div>
        <div className="course_title_img_holder">
          {/* <img src={course.course_avatart} alt={course.name} className='bg-information w-80' /> */}
        </div>
      </div>
      <div className="course_description py-8">
        <div className="about_course pb-4">
          <div  className="about_course_column">
            <h3 className="font-bold text-warning">Introduction</h3>
          </div>
          <div>
            {lesson.description}
          </div>
        </div>
        <div>
            {
                lesson.type === 'video'? <video></video> : <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    odit itaque ut doloribus, nesciunt labore id doloremque saepe
                    aliquid quisquam ipsam quia ea! Magnam harum ipsam iusto
                    exercitationem quod suscipit!
                </p>
                </div>
            }{/*substitute paragraphs for lesson.content*/}
        </div>
      </div>
      <div className="course_and_course_details_toggle_button pb-4">
        <div className="division_column">
          <Link to={lesson.downloadPdfLink}><h3 className="text-warning font-bold text-lg">download pdf</h3></Link>
        </div>
      </div>
    </>
  );
};

export default LessonComponent;
