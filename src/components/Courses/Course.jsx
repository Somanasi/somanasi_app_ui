import React, { useState} from 'react'
import { CourseBreakDown } from "./index";
import { Button } from "../index";
const Course = ({ course }) => {
    const [courseOpen, setCourseOpen] = useState(null);
    const toggleCourseOpen = (e) => {
        e.preventDefault();
        setCourseOpen(!courseOpen);
    };

    return (
        <>
            <div className='course_title rounded-lg py-4 '>
                <div className='course_title_column pl-4 '>
                    <div >
                        {course.classification}
                    </div>
                    <div>
                        <h2>{course.name}</h2>
                    </div>
                    <div>
                        <span>KES. {course.price}</span>
                    </div>
                </div>
                <div className='course_title_img_holder'>
                    {/* <img src={course.course_avatart} alt={course.name} className='bg-information w-80' /> */}
                </div>
            </div>
            <div className='course_description'>
                <div>
                    <div>
                        <h3>Abour Course</h3>
                    </div>
                    <div>
                        <span>
                            &#9733; 4.4(700);
                        </span>
                    </div>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum odit itaque ut doloribus, nesciunt labore id
                        doloremque saepe aliquid quisquam ipsam quia ea! Magnam
                        harum ipsam iusto exercitationem quod suscipit!
                    </p>
                </div>
            </div>
            <div className=''>
                <div>
                    <h3>Course</h3>
                </div>
                <div>
                    <Button onClick={(e) => toggleCourseOpen(e)}>See All</Button>
                </div>
            </div>
            <div className="course_breakdown">
                {
                    course.course_breakdown.map((breakdown, index) => {
                        return <CourseBreakDown breakdown={breakdown} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default Course