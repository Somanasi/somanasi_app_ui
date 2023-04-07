import React from "react";
import { Form } from "react-router-dom";
import Input from "../components/Input";
const Home = () => {
  return (
    <main className="home">
      <section className="searchBar">
        <Form method="GET">
          <Input name="search" id="search">
            Search here
          </Input>
        </Form>
      </section>
      <section className="tips">
        <div>
          <h1>Why take our courses?</h1>
        </div>
        <div>
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
      <section>
        <div>
          <h1>My Courses</h1>
        </div>
        <div>
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
    </main>
  );
};

export default Home;
