import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Logo} from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header>
      <div>
        <Logo width="50px" height="50px" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/courses"}>Course</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/about_us"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact_us"}>Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
