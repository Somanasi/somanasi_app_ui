import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import App from "../App";
<<<<<<< HEAD
  import { Error, Home, Courses, Blog, AboutUs, ContactUs, SingleBlog, SingleCourse, Login, Register, Terms, Dashboard, Portaldasgboard, USerProfile, } from "../views";
=======
    
  import { Error, Home, Courses, Blog, AboutUs, ContactUs, SingleBlog, SingleCourse, Login, Register, Terms, Dashboard, } from "../views";
  import { loginAction } from "../modules/auth/login/services/loginAction";
>>>>>>> 7482436d65f78c59898b8e7a13f34ef7012dd816
  import { registerAction } from "../modules/auth/signup/services/registerAction";
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App />} errorElement={<Error />} path="/">
        <Route element={<Home />} index />
        <Route element={<Courses />} path="courses"/>
        <Route element={<SingleCourse />} path="courses/:id" />
        <Route element={<Blog />} path="blog" />
        <Route element={<SingleBlog />} path="blog/:id"/>
        <Route element={<AboutUs />} path="about_us" />
        <Route element={<ContactUs />} path="contact_us" />
<<<<<<< HEAD
        <Route element={<Login />} path="login" />
        
=======
        <Route element={<Login />} path="login" action={loginAction}/>

>>>>>>> 7482436d65f78c59898b8e7a13f34ef7012dd816
        <Route element={<Register />} 
        path="register"
        action={registerAction}
         />

        <Route element={<Terms />} path="terms" />
        <Route element={<Dashboard />} path="dashboard" />
        <Route element={<Portaldasgboard />} path="dashboard/display" />
        <Route element={<USerProfile />} path="dashboard/profile" />

      </Route>
    )
  );

  export default routes;