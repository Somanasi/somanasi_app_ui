import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import App from "../App";
  import { Error, Home, Courses, Blog, AboutUs, ContactUs, SingleBlog, SingleCourse, Login, Register, Terms, Dashboard, } from "../views";
  import { registerAction } from "../modules/auth/signup/services/registerAction";
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
        <Route element={<Terms />} path="terms" />
        <Route element={<Dashboard />} path="terms" />
      </Route>
    )
  );

  export default routes;