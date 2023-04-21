import React from "react";
import { Form } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { useAppState, } from "../store/ApplicationContext";
import Reviews from "../components/Reviews";
import { GoPackage, GoCommentDiscussion, GoDeviceCameraVideo, GoStar } from "react-icons/go";
import { PageTitle } from "../components";
// import { register } from 'swiper/element/bundle';

const Home = () => {
  // States
  const state = useAppState();
  // register();

  return (
    <main className="home">
      <section className="introduction">
        <div className="intro">
          <h1>Elimuendelezi</h1>
        </div>
      </section>
      <section className="tips">
        <div className="section-heading">
          <h1><span>Why</span> Elimuendelezi?</h1>
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
              Elimuendelezi offers a range of packages, each designed to meet the unique needs of our students.
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
            Subscribers access 2 subject-specific learning communities to connect, study, chat, and engage in forums for an interactive learning experience.
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
              With Elimuendelezi Premium, students can engage in live video discussions with their peers and instructors, enabling them to ask questions and get immediate feedback.
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
            At Elimuendelezi, we are committed to providing the highest quality education and training to our students.
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
