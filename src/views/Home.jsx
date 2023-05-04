import React from "react";
import { useAppState, } from "../store/ApplicationContext";
import Reviews from "../components/Reviews";
import { GoPackage, GoCommentDiscussion, GoDeviceCameraVideo, GoStar } from "react-icons/go";
import LiteratureImage from '../assets/images/literature.jpeg';
import { NavLink } from "react-router-dom";

const Home = () => {
  // States
  const state = useAppState();
  // register();

  return (
    <main className="">
      <section className="px-4 pt-12 bg-primary">
        <div className="text-center mb-12">
          <h1 className="font-extrabold subpixel-antialiased text-2xl">My Courses</h1>
        </div>
        <div className="section-content ">
          <div className="flex-col items-center">
            <div className="mb-2 ">
              <img src={LiteratureImage} alt="physics course image" className="rounded-md shadow-lg shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize">physics</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                   at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div>
                <NavLink to={'/courses/:id'}>Explore</NavLink>
            </div>
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
