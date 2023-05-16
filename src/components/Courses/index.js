import React from "react"
const WeeklyLessons =  React.lazy(import('./WeeklyLessons'));
const CourseBreakDown = React.lazy(import('./CourseBreakDown'));
export {
    WeeklyLessons,
    CourseBreakDown,
}