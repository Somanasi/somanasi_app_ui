//icons are the thumbnail images of the course
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { dummyData } from "../dummydata/Dummy.js";
import { PageTitle, SearchInput } from "../components";
import { FaFilter } from "react-icons/fa"
import { BiBookmark } from "react-icons/bi"
import { Button, DurationFormat } from "../components";
const Courses = () => {
  const [filterCourses, setFilterCourses] = useState(false);
  PageTitle(document.URL);
  console.log(document.title)
  return (
    <main className="main_courses bg-primary py-12 px-1">
      <section className="section_introduction">
        <div role="search" className="search_div pb-12 w-full">
          <Form className={filterCourses ? "toggle-form-display" : ''}>
            <SearchInput size={25} placeholder="Search courses" />
            <div className="form-group position-filter">
              < span title="Filter courses" className="filter-icon" onClick={() => setFilterCourses(!filterCourses)}>
                <FaFilter size={filterCourses ? 20 : 30} />
              </span>
              {
                filterCourses ?
                  <select name="courses" id="courses" className="courses">
                    <option disabled selected>Filter your courses</option>
                    <option value="in progress">In progress</option>
                    <option value="completed">Completed</option>
                    <option value="popular">Popular</option>
                    <option value="new">New courses</option>
                  </select>
                  : ""
              }
            </div>
          </Form>
        </div>
        <div className="flex justify-left pb-4">
          <h1 className="font-extrabold text-warning text-2xl">Courses for you </h1>
        </div>
      </section>
      <section className="section_course_list">
        {dummyData.map((items, index) => (
          <div className="course_card py-8  mb-0 drop-shadow-lg  px-2" key={index}>
            <div className="course_card_row flex align-middle">
              <div className="course_card_row_col mr-2 w-1/2">
                <Link to={"/courses/" + items.id}>
                  <img src={items.icon} alt={items.name} className=" rounded-md w-60" />
                </Link>
              </div>
              <div className="course_card_row_col w-1/2">
                <Link to={"/courses/" + items.id}>
                  <div className="col-course-name max-w-max px-2 pb-1 rounded-lg">
                    <h3 className=" text-blue-500 font-thin ">{items.name}</h3>
                  </div>
                  <div>
                    <div>
                      <p>{items.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-normal">
                        <span>
                          {
                            (() => {
                              const { minutes, hours } = DurationFormat(items.duration);
                              return `${hours>0? hours+"h":""} ${minutes>0? minutes+"m":""}`
                            })()
                          }
                        </span>
                        <span>.</span>
                        <span>
                          {items.lessons}
                          {items.lessons > 1 ? " Lessons" : " Lesson"}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
                <Button>
                  <BiBookmark size={20} />
                </Button>
              </div>
            </div>
            <div className="course_card_row flex align-middle pt-4">
              <div className="course_card_row_col w-1/6">
                <img src={items.author_avatar} alt={items.author} className=" w-10 h-10 rounded-full" />
              </div>
              <div className="course_card_row_col w-3/6 ">
                <span className="last_row_span">
                  {items.author}
                </span>
              </div>
              <div className="course_card_row_col justify-end align-middle w-2/6">
                <span className="last_row_span">KES. {items.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Courses;
