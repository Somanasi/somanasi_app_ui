import React from 'react'
import { GoChevronRight } from "react-icons/go";

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
                {
                    breakdown.lessons.map( (lesson, index) => {
                        <WeeklyLessons lesson={lesson} key={key}/>
                    })
                }
            </div>
        </div>
    )
}

export default CourseBreakDown