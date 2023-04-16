import React from "react";
import { Form } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { useAppState, } from "../store/ApplicationContext";
import Reviews from "../components/Reviews";
import { GoPackage } from "react-icons/go";
// import { register } from 'swiper/element/bundle';

const Home = () => {
  // States
  const state = useAppState();

  // register();

  return (
    <main className="home">
      <section className="searchBar">
        <p>Search for a course here</p>
        <Form method="GET">
          <SearchInput size={25} />
        </Form>
      </section>
      <section className="tips">
        <div className="section-heading">
          <h1>Why Elimuendelezi?</h1>
        </div>
        <div className="section-content">
          <div className="offers">
            <h4>
              <span>
                <GoPackage size={20} />
              </span>
              <span>
                Range of Packages
              </span>
            </h4>
            <p>
              Somesha Dada offers a range of packages, each designed to meet the unique needs of our students.
              Our Regular package includes access to articles, read-only notes, and counseling to support our learners.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
              omnis quod perspiciatis amet quia asperiores commodi quasi eius,
              quidem, assumenda et nisi adipisci quo dolores officia laudantium
              fuga repellendus!
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              laboriosam tempore earum odio expedita unde consectetur animi
              sint? Magnam, veritatis. Temporibus, eaque sint enim qui quos esse
              praesentium porro tempore.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident animi a totam delectus, dicta iusto dolorem eaque nobis.
              Repellendus voluptate facere porro eveniet aliquam quisquam
              quaerat ut nemo necessitatibus accusantium!
            </p>
          </div>
        </div>
      </section>
      <section className="mycourses">
        <div className="section-heading">
          <h1>My Courses</h1>
        </div>
        <div className="section-content">
          <div>
            <p>course 1</p>
          </div>
          <div>
            <p>course 1</p>
          </div>
          <div>
            <p>course 1</p>
          </div>
          <div>
            <p>course 1</p>
          </div>
          <div>
            <p>course 1</p>
          </div>
          <div>
            <p>course 1</p>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="section-heading">
          <h1>What people say about us</h1>
        </div>
        <div className="section-content">
          {
            state.reviews.map(({ ...review_item }, i) => {
              return (
                <Reviews key={i} {...review_item} />
              )
            })
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
