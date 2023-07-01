import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import App from "../App";

  import { Error, Home, Courses, Blog, AboutUs, ContactUs, SingleBlog, SingleCourse, Login, Register, Terms, Dashboard, UserProfile, ChangePassword, Courseonoffer, Blogpage,Generatereport, AdminDashoboard, } from "../views";
  import { loginAction } from "../auth/login/services/loginAction";
  import { registerAction } from "../auth/signup/services/registerAction";
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<App />} errorElement={<Error />} path="/">
          <Route element={<Home />} index />
          <Route element={<Courses />} path="courses"/>
          <Route element={<SingleCourse />} path="courses/:id" />
          <Route element={<Blog />} path="blog" />
          <Route element={<SingleBlog />} path="blog/:id"/>
          <Route element={<AboutUs />} path="about_us" />
          <Route element={<ContactUs />} path="contact_us" />
          <Route 
            element={<Login />} 
            path="login" 
            action={loginAction} 
          />

          <Route element={<Register />} 
          path="register"
          action={registerAction}
          />
          <Route element={<Terms />} path="terms" />

          {/* Portal */}
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<UserProfile />} path="profile" />
          <Route element={<ChangePassword />} path="changepassword" />
          <Route element={<Courseonoffer />} path="coursesonoffer" />
          <Route element={<Blogpage />} path="blogpage" />
          <Route element={<Generatereport />} path="downloadcoursesummary" />

          <Route 
            element={<AdminDashoboard />} 
            path="admin"
          >
          {/* <Route element={< ManageCon />} path="content" /> */}
        </Route>
      </Route>
      </>
    )
  );

  export default routes;