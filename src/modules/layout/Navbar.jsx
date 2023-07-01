import React from "react";
import { NavLink, } from "react-router-dom";
import Logo from "../shared/components/Logo";
import { GoGrabber, GoX, GoPerson, GoSignOut } from "react-icons/go";
import {
  BsFillHouseFill,
  BsFillBookFill,
  BsPencilSquare,
  BsFillInfoSquareFill,
  BsPhoneFlip
} from "react-icons/bs";
import Button from "../shared/components/Button";
import ListItems from "./ListItems";
import { useAppState, useDispatchAppState } from "../../store/ApplicationContext";
import Logout from "../../auth/logout/components/Logout";
import isSpecifiedPath from "../shared/utils/RouterUtil";


const Navbar = () => {
  const toggle = useDispatchAppState();
  const visible = useAppState();

  if(isSpecifiedPath('/dashboard')) return null;
  if(isSpecifiedPath('/admin')) return null;
  
  return (
    <header className="bg-warning h-1/4">
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
              <BsFillHouseFill size={20} />
            </span>
            <NavLink to={"/"}>Home</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsFillBookFill size={20} />
            </span>
            <NavLink to={"/courses"}>Course</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsPencilSquare size={20} />
            </span>
            <NavLink to={"/blog"}>Blog</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsFillInfoSquareFill size={20} />
            </span>
            <NavLink to={"/about_us"}>About us</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <BsPhoneFlip size={20} />
            </span>
            <NavLink to={"/contact_us"}>Contact us</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <GoPerson size={20} />
            </span>
            <NavLink to={"/login"}>Accounts</NavLink>
          </ListItems>
          <ListItems>
            <span>
              <GoPerson size={20} />
            </span>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
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
                  <GoSignOut size={20} />
                </span>
                <span className="logout-text">
                  Logout
                </span>
              </Logout>
              : ''
          }
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
