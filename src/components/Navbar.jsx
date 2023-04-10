import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GoGrabber, GoX } from "react-icons/go";
import {
  BsFillHouseFill,
  BsFillBookFill,
  BsPencilSquare,
  BsFillInfoSquareFill,
  BsPhoneFlip
} from "react-icons/bs";
import Button from "./Button";
import ListItems from "./ListItems";
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
          { visible? <GoX size={25}/> : <GoGrabber size={50} />}
        </Button>
      </div>
      <nav className={visible ? "show_menu menu" : "menu"}>
        <ul>
          <ListItems>
            <span>
              <BsFillHouseFill size={25} />
            </span>
            <NavLink to={"/"}>Home</NavLink>
          </ListItems>
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
