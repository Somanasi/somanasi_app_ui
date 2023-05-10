//icons are the thumbnail images of the course
import React from "react";
import { Form, Link } from "react-router-dom";
import { dummyData } from "../dummydata/Dummy.js";
import { PageTitle, SearchInput } from "../components";

const Courses = () => {
  PageTitle(document.URL);
  console.log(document.title)
  return (
    <main className="main_courses bg-primary py-12 px-4">
      <section className="section_introduction">
        <div role="search" className="search_div pb-12 w-full">
          <Form>
            <SearchInput size={25} placeholder="Search courses" />
          </Form>
        </div>
        <div className="flex justify-left pb-4">
          <h1 className="font-extrabold text-warning text-2xl">Courses for you </h1>
        </div>
      </section>
      <section>
        <div>
          {dummyData.map((items, index) => (
            <div className="py-8  mb-8 drop-shadow-lg  px-2 ">
              <div className="flex align-middle">
                <div>
                  <Link to={"/courses/" + items.id}>
                    <div>
                      <h3 className="font-bold text-information">{items.name}</h3>
                    </div>
                    <div>
                      <p>{items.description}</p>
                    </div>
                  </Link>
                </div>
                <div >
                  <Link to={"/courses/" + items.id}>
                    <img  src={items.icon} alt={items.name} className="w-2/3"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Courses;
