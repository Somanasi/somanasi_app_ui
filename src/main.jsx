import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import App from "./App";
import { Error, Home, Courses, Blog, AboutUs, ContactUs, SingleBlog, SingleCourse, Login, Logout, Register, Tac, } from "./routes";
import './assets/sass/main.scss'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<Error />} path="/">
      <Route element={<Home />} index />
      <Route element={<Courses />} path="courses" />
      <Route element={<SingleCourse />} path="courses/:id" />
      <Route element={<Blog />} path="blog" />
      <Route element={<SingleBlog />} path="blog/:id"/>
      <Route element={<AboutUs />} path="about_us" />
      <Route element={<ContactUs />} path="contact_us" />
      <Route element={<Login />} path="login" />
      <Route element={<Register />} path="register" />
      <Route element={<Logout />} path="logout" />
      <Route element={<Tac />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
