import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="somanasi logo" />
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
