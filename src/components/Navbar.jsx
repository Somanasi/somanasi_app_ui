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
import { useAppState, useDispatchAppState } from "../store/ApplicationContext";
import Logout from "./Logout";


const Navbar = () => {
  const toggle = useDispatchAppState();
  const visible = useAppState();

  return (
    <header className="bg-warning h-screen">
      <div>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
      </div>
      <div className="mobile-view">
        <Button onClick={() => toggle({ type: 'TOGGLE_MOBILE_VIEW' })}>
          {visible.toggleMobileView ? <GoX size={25} /> : <GoGrabber size={50} />}
        </Button>
      </div>
      <nav className={visible.toggleMobileView ? "show_menu menu" : "menu"}>
        <ul>
          <ListItems>
            <span>
              <BsFillHouseFill size={25} />
            </span>
            <NavLink to={"/"}>Home</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsFillBookFill size={25} />
            </span>
            <NavLink to={"/courses"}>Course</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsPencilSquare size={25} />
            </span>
            <NavLink to={"/blog"}>Blog</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsFillInfoSquareFill size={25} />
            </span>
            <NavLink to={"/about_us"}>About us</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsPhoneFlip size={25} />
            </span>
            <NavLink to={"/contact_us"}>Contact us</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <GoPerson size={25} />
            </span>
            <NavLink to={"/login"}>Accounts</NavLink>
          </ListItems>
          {
            visible.isLoggedIn ?
              <Logout onClick={() => toggle({
                type: 'USER_LOGIN_STATUS',
                payload: {
                  isLoggedIn: false,
                }
              })}>
                <span className="logout-icon">
                  <GoSignOut size={25} />
                </span>
                <span className="logout-text">
                  Logout
                </span>
              </Logout>
              : ''
          }
        </ul>
      </nav>
      <div className="heading-text-container">
        <h1 className="big_text">
          A Learned commuity,
          <span> A modern community</span>
        </h1>
        <div className="cta-btn">
          <NavLink to={'/courses'}>
            Visit Courses
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
