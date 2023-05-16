import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageTitle, DurationFormat, courseFilters, CourseFilterList} from "./utility";
import SearchInput from "./SearchInput";
import Button from "./Button";
const {WeeklyLessons, CourseBreakDown} = React.lazy( import('./Courses'));

export {
    Navbar,
    Footer,
    PageTitle,
    SearchInput,
    Button,
    DurationFormat,
    courseFilters,
    CourseFilterList,
    WeeklyLessons,
    CourseBreakDown,
}