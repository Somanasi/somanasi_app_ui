import React from "react";
import { Form } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import SearchInput from "../components/SearchInput";
import { useAppState, } from "../store/ApplicationContext";

const Home = () => {
  const reviews = useAppState();
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
          {
            reviews.reviews.map(({ review_image, name, review }) => {
              return (
                <div key={() => uuidv4()} className="review-container">
                  <div className="reviewer-dp">
                    <img src={review_image} alt={name} />
                  </div>
                  <div className="reviewer-content">
                    <p>{review}</p>
                  </div>
                  <div className="reviewer-id">
                    <span>{name}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
