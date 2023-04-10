import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GoGrabber } from "react-icons/go";
import {
  BsFillHouseFill,
  BsFillBookFill,
  BsPencilSquare,
  BsFillInfoSquareFill,
  BsPhoneFlip
} from "react-icons/bs";
import Button from "./Button";
const Navbar = ({ visible, toggle }) => {
  return (
    <header className="header">
      <div>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="mobile-view">
        <Button onClick={() => toggle(!visible)}>
          <GoGrabber size={50} />
        </Button>
      </div>
      <nav className={visible ? "show_menu menu" : "menu"}>
        <ul>
          <li>
            <span>
              <BsFillHouseFill size={25} />
            </span>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <span>
              <BsFillBookFill size={25} />
            </span>
            <NavLink to={"/courses"}>Course</NavLink>
          </li>
          <li>
            <span>
              <BsPencilSquare size={25} />
            </span>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <span>
              <BsFillInfoSquareFill size={25} />
            </span>
            <NavLink to={"/about_us"}>About us</NavLink>
          </li>
          <li>
            <span>
              <BsPhoneFlip size={25} />
            </span>
            <NavLink to={"/contact_us"}>Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
