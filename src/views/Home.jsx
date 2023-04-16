import React from "react";
import { Form } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { useAppState, } from "../store/ApplicationContext";
import Reviews from "../components/Reviews";
import { GoPackage, GoCommentDiscussion, GoDeviceCameraVideo, GoStar } from "react-icons/go";
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
          <div className="offers">
            <h4>
              <span>
                <GoCommentDiscussion size={20} />
              </span>
              <span>
                Learning Communities
              </span>
            </h4>
            <p>
              Subscribers gain access to two learning communities, allowing them to connect with other learners,
              form study groups, engage in online chat, and participate in community forums.
              Learning communities are tailored to specific subjects, providing students with an interactive and engaging learning experience.
            </p>
          </div>
          <div className="offers">
            <h4>
              <span>
                <GoDeviceCameraVideo size={20} />
              </span>
              <span>
                Video Conferencing
              </span>
            </h4>
            <p>
              With Somesha Dada Premium, students can engage in live video discussions with their peers and instructors, enabling them to ask questions and get immediate feedback.
            </p>
          </div>
          <div className="offers">
            <h4>
              <span>
                <GoStar size={20} />
              </span>
              <span>
                High Quality Content
              </span>
            </h4>
            <p>
              Somesha Dada offers a range of packages, each designed to meet the unique needs of our students.
              Our Regular package includes access to articles, read-only notes, and counseling to support our learners.
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
