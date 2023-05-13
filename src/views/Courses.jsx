//icons are the thumbnail images of the course
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { dummyData } from "../dummydata/Dummy.js";
import { PageTitle, SearchInput } from "../components";
import { BiBookmark } from "react-icons/bi"
import { GoPrimitiveDot, GoChevronRight } from "react-icons/go"
import { Button, DurationFormat, courseFilters } from "../components";
const Courses = () => {
  const [filterCourses, setFilterCourses] = useState(false);
  PageTitle(document.URL);
  

  const scrollingFilterHandler = (e) => {
    e.stopPropagation();
    if (e.target.tagName === 'svg') {
      const filter_scroller = e.target.parentElement.parentElement.parentElement.children;
      const targetFilter = Array.from(filter_scroller)[Array.from(filter_scroller).length - 2];

      console.log(targetFilter.textContent)
    }
  }

  return (
    <main className="main_courses bg-primary">
      <section className="section_introduction">
        <div role="search" className="search_div pb-8 w-full">
          <Form className={filterCourses ? "toggle-form-display" : ''}>
            <SearchInput size={25} placeholder="Search courses" />
            {/* <div className="form-group position-filter">
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
            </div> */}
          </Form>
        </div>
        <div className="flex justify-left pb-8 px-2">
          <h1 className="font-extrabold text-warning text-2xl">Courses for you </h1>
        </div>
      </section>
      <section className="section_course_list">
        <div className="course_list_filter ml-2 py-1 drop-shadow-lg mb-2">
          {
            courseFilters.slice(0, 3).map(({ id, filter_name }) => {
              return (
                <div key={id} className="filter_card px-6">
                  {filter_name}
                </div>
              )
            })
          }
          <div className="hide_all_filter_list_button">
            <Button onClick={scrollingFilterHandler}>
              <GoChevronRight size={20} />
            </Button>
          </div>
        </div>
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
                  <div className="col-course-desc">
                    <div className="col-course-desc-row">
                      <p>{items.description}</p>
                    </div>
                    <div className="col-course-desc-row">
                      <p className="text-xs font-medium">
                        <span>
                          {
                            (() => {
                              const { minutes, hours } = DurationFormat(items.duration);
                              return `${hours > 0 ? hours + "h" : ""} ${minutes > 0 ? minutes + "m" : ""}`
                            })()
                          }
                        </span>
                        <span className="dot"><GoPrimitiveDot size={10} /></span>
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
                <span className="last_row_span text-blue-500 font-semibold">KES. {items.price}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Courses;
