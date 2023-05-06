import React from "react";
import { useAppState, } from "../store/ApplicationContext";
import Reviews from "../components/Reviews";
import { GoPackage, GoCommentDiscussion, GoDeviceCameraVideo, GoLinkExternal } from "react-icons/go";
import { FaHourglass} from "react-icons/fa";
import LiteratureImage from '../assets/images/literature.jpeg';
import Physics from '../assets/images/physics.jpeg';
import Maths from '../assets/images/maths.jpeg';
import Chem from '../assets/images/chem.jpeg';
import Bio from '../assets/images/biology.jpeg';
import CompStudies from '../assets/images/comp.jpeg';
import { NavLink } from "react-router-dom";

const Home = () => {
  // States
  const state = useAppState();
  // register();

  return (
    <main className="homepage">
      <section className="section_courses px-4 pt-12 pb-8 bg-primary">
        <div className="text-center mb-12">
          <h1 className="font-extrabold subpixel-antialiased text-2xl text-secondary">My Courses</h1>
        </div>
        <div className="section_courses-content ">
          <div className="course_card flex-col items-center shadow-lg shadow-indigo-500/30 px-4 py-4 mb-12 bg-secondary_light">
            <div className="mb-2 ">
              <img src={Physics} alt="physics course image" className="rounded-md shadow-lg shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize text-tertiary">physics</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                  at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div className="course_card-btn_row bg-secondary w-28 text-center mt-4 py-2 rounded-md shadow-lg shadow-cyan-200/20">
              <NavLink to={'/courses/:id'}>
                <span className="mr-2"><GoLinkExternal size={20} /></span>
                <span>Explore</span>
              </NavLink>
            </div>
          </div>
          <div className="course_card flex-col items-center shadow-lg shadow-indigo-500/30 px-4 py-4 mb-8 bg-secondary_light">
            <div className="mb-2 ">
              <img src={Maths} alt="physics course image" className="rounded-md shadow-lg shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize text-tertiary">Mathematics</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                  at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div className="course_card-btn_row bg-secondary w-28 text-center mt-4 py-2 rounded-md shadow-lg shadow-cyan-200/20">
              <NavLink to={'/courses/:id'}>
                <span className="mr-2"><GoLinkExternal size={20} /></span>
                <span>Explore</span>
              </NavLink>
            </div>
          </div>
          <div className="course_card flex-col items-center shadow-lg shadow-indigo-500/30 px-4 py-4 mb-8 bg-secondary_light">
            <div className="mb-2 ">
              <img src={Chem} alt="physics course image" className="rounded-md shadow-lg shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize text-tertiary">Chemistry</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                  at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div className="course_card-btn_row bg-secondary w-28 text-center mt-4 py-2 rounded-md shadow-lg shadow-cyan-200/20">
              <NavLink to={'/courses/:id'}>
                <span className="mr-2"><GoLinkExternal size={20} /></span>
                <span>Explore</span>
              </NavLink>
            </div>
          </div>
          <div className="course_card flex-col items-center shadow-lg shadow-indigo-500/30 px-4 py-4 mb-8 bg-secondary_light">
            <div className="mb-2 ">
              <img src={Bio} alt="physics course image" className="rounded-md shadow-lg shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize text-tertiary">Biology</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                  at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div className="course_card-btn_row bg-secondary w-28 text-center mt-4 py-2 rounded-md shadow-lg shadow-cyan-200/20">
              <NavLink to={'/courses/:id'}>
                <span className="mr-2"><GoLinkExternal size={20} /></span>
                <span>Explore</span>
              </NavLink>
            </div>
          </div>
          <div className="course_card flex-col items-center shadow-lg shadow-indigo-500/30 px-4 py-4 mb-8 bg-secondary_light">
            <div className="mb-2 ">
              <img src={LiteratureImage} alt="physics course image" className="rounded-md shadow-lg shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize text-tertiary">Literature</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                  at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div className="course_card-btn_row bg-secondary w-28 text-center mt-4 py-2 rounded-md shadow-lg shadow-cyan-200/20">
              <NavLink to={'/courses/:id'}>
                <span className="mr-2"><GoLinkExternal size={20} /></span>
                <span>Explore</span>
              </NavLink>
            </div>
          </div>
          <div className="course_card flex-col items-center shadow-lg shadow-indigo-500/30 px-4 py-8 mb-8  bg-secondary_light">
            <div className="mb-2 ">
              <img src={CompStudies} alt="physics course image" className="rounded-md shadow-lg mb-8 shadow-indigo-500/40 " />
            </div>
            <div>
              <h3 className="font-medium text-lg capitalize text-tertiary">Computer studies</h3>
              <p className="text-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis ipsum harum assumenda
                  at deleniti enim sed quidem quam quasi odio eos laudantium cumque numquam pariatur, laborum modi totam optio.</span>
              </p>
            </div>
            <div className=" course_card-btn_row bg-secondary w-28 text-center mt-4 py-2 rounded-md shadow-lg shadow-cyan-200/20">
              <NavLink to={'/courses/:id'}>
                <span className="mr-2"><GoLinkExternal size={20} /></span>
                <span>Explore</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section_tips bg-secondary_light py-8 px-4">
        <div className="section-tips_heading pt-4 pb-8">
          <h1 className="text-2xl text-center font-extrabold text-secondary "><span>Elimuendelezi</span> way</h1>
        </div>
        <div className="section-content">
          <div className="offers bg-primary opacity-60 py-4 px-4 rounded-md shadow-lg shadow-yellow-50/1 mb-8">
            <h4 className="">
              <span className="text-warning">
                <GoPackage size={20} />
              </span>
              <span className="font-black">
                Range of Packages
              </span>
            </h4>
            <p className="text-tertiary font-normal">
              Elimuendelezi offers a range of packages, each designed to meet the unique needs of our students.
              Our Regular package includes access to articles, read-only notes, and counseling to support our learners.
            </p>
          </div>
          <div className="offers bg-primary opacity-60 py-4 px-4 rounded-md shadow-lg shadow-yellow-50/1 mb-8">
            <h4>
              <span className="text-information">
                <GoCommentDiscussion size={20} />
              </span>
              <span className="font-black">
                Learning Communities
              </span>
            </h4>
            <p className="text-tertiary font-normal">
              Subscribers access 2 subject-specific learning communities to connect, study, chat, and engage in forums for an interactive learning experience.
            </p>
          </div>
          <div className="offers bg-primary opacity-60 py-4 px-4 rounded-md shadow-lg shadow-yellow-50/1 mb-8">
            <h4>
              <span className="">
                <GoDeviceCameraVideo size={20} />
              </span>
              <span className="font-black">
                Video Conferencing
              </span>
            </h4>
            <p className="text-tertiary font-normal">
              With Elimuendelezi Premium, students can engage in live video discussions with their peers and instructors, enabling them to ask questions and get immediate feedback.
            </p>
          </div>
          <div className="offers bg-primary opacity-60 py-4 px-4 rounded-md shadow-lg shadow-yellow-50/1 mb-8">
            <h4>
              <span className="text-secondary" >
                <FaHourglass size={20} />
              </span>
              <span className="font-black">
                High Quality Content
              </span>
            </h4>
            <p className="text-tertiary font-normal">
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
