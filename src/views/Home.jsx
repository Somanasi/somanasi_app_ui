import React from "react";
import { Form } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { useAppState, } from "../store/ApplicationContext";
import Reviews from "../components/Reviews";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  // States
  const state = useAppState();

  // Setttings : slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
          <h1>Why Somesha Dada?</h1>
        </div>
        <div className="section-content">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              aliquam molestias? Sapiente exercitationem dolorum veniam ipsa
              debitis accusamus eos est voluptatibus explicabo? Alias facere
              delectus nobis voluptatibus qui quo cumque.
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
          <Slider>
            {
              state.reviews.map(({ ...review_item }, i) => {
                return (
                  <Reviews key={i} {...review_item} />
                )
              })
            }
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;
