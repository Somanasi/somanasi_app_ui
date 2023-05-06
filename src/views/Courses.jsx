//icons are the thumbnail images of the course
import React from "react";
import { Form, Link } from "react-router-dom";
import { dummyData } from "../dummydata/Dummy.js";
import {PageTitle, SearchInput} from "../components";

const Courses = () => {
  PageTitle(document.URL);
  console.log(document.title)
  return (
    <main>
        <section>
            <div><h1>Courses</h1></div>
            <div>
                <Form>
                    <SearchInput size={25}/>
                </Form>
            </div>
        </section>
      <section>
        <div style={{ overflow: "auto", position: "relative" }}>
          <div style={{ textAlign: "center", fontSize: "25px" }}>
            <h1>Courses</h1>
          </div>
          {dummyData.map((items, index) => (
            <div style={{ width: "80vw", position: "relative" }}>
              <div style={{ display: "flex", margin: "10px" }}>
                <div>
                  <Link to={"/courses/" + items.id}>
                    <div>
                      <h3 style={{ padding: "10px" }}>{items.name}</h3>
                    </div>
                    <div>
                      <p>{items.description}</p>
                    </div>
                  </Link>
                </div>
                <div style={{ padding: "10px" }}>
                  <Link to={"/courses/" + items.id}>
                    <img width="100px" height="100px" src={items.icon} />
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Courses;
