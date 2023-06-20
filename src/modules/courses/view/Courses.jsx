//icons are the thumbnail images of the course
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { dummyData } from "../../../dummydata/Dummy.js";
import { BiBookmark } from "react-icons/bi"
import { GoPrimitiveDot, GoChevronRight } from "react-icons/go"
import { SearchInput, Button, DurationFormat, } from "../../shared/index.js";
import { CourseFilterList, courseFilters } from "../utils";
import Favorite from "../utils/FavoriteCourses.jsx";

import { FaSearch } from "react-icons/fa";

const filter = [];

function Search(props){
  const filteredCourses = dummyData.filter((item)=>{
    if(props.input === ''){
      return item;
    }
    else{
      return item.name.toLowerCase().includes(props.input) || item.author.toLowerCase().includes(props.input);
    }
  }); 
  return (
    <>
    {filteredCourses.map((item, index)=>(
    <Link to={"/courses/" + item.id} key={index}>
      <img src={item.icon} alt={item.name} className=" rounded-md w-60" />
      <div className="col-course-name max-w-max px-2 pb-1 rounded-lg">
            <h3 className=" text-blue-500 font-thin ">{item.name}</h3>
          </div>
    </Link>
    ))}
    </>
  )
}

export default function Courses() {
  const [searchResult, setSearchResult] = useState("");
  const handleSearch=(event)=>{
    event.preventDefault();
    setSearchResult(event.target.value);
    console.log(searchResult);
  }
  return (
    <main className="main_courses bg-primary">
      <section className="section_introduction">
        <div role="search" className="search_div pb-8 w-full">
          
          <Form onSubmit={(event)=>handleSearch(event)}>
            <SearchInput size={25} placeholder="Search courses" value={searchResult} valueChange={(event)=>handleSearch(event)}/>
          </Form>
          {!searchResult?"":<Search input={searchResult} />}
        </div>
        <div className="flex justify-left pb-8 px-2">
          <h1 className="font-extrabold text-warning text-2xl">Courses for you </h1>
        </div>
      </section>
      <section className="section_course_list">
        <CourseFilterList courseFilters={courseFilters} />
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
                <Button onClick={()=> Favorite(items.id)}>
                  <BiBookmark size={20} />
                </Button >
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