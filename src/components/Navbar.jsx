import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { GoGrabber, GoX, GoPerson, GoSignOut } from "react-icons/go";
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
        <Button onClick={() => toggle({type: 'TOGGLE_MOBILE_VIEW'})}>
          { visible? <GoX size={25}/> : <GoGrabber size={50} />}
        </Button>
      </div>
      <nav className={visible ? "show_menu menu" : "menu"}>
        <ul>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <BsFillHouseFill size={25} />
            </span>
            <NavLink to={"/"}>Home</NavLink>
          </ListItems>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <BsFillBookFill size={25} />
            </span>
            <NavLink to={"/courses"}>Course</NavLink>
          </ListItems>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <BsPencilSquare size={25} />
            </span>
            <NavLink to={"/blog"}>Blog</NavLink>
          </ListItems>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <BsFillInfoSquareFill size={25} />
            </span>
            <NavLink to={"/about_us"}>About us</NavLink>
          </ListItems>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <BsPhoneFlip size={25} />
            </span>
            <NavLink to={"/contact_us"}>Contact us</NavLink>
          </ListItems>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <GoPerson size={25} />
            </span>
            <NavLink to={"/login"}>Accounts</NavLink>
          </ListItems>
          <ListItems toggle={toggle} visible={visible}>
            <span>
              <GoSignOut size={25} />
            </span>
            <NavLink to={"/logout"}>Logout</NavLink>
          </ListItems>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
