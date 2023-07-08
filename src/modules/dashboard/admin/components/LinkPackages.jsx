import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { adminState, adminStateDispatcher } from "../adminStore";

const LinkPackages = ({ link }) => {
  /**
   * HOOKS
   */
  const [sublinksHeight, setSublinksHeight] = useState(0);
  const liRef = useRef(null);

  const navigate = useNavigate();

  const adminGlobalState = adminState();
  const adminStateDispatcherGlobal = adminStateDispatcher();

  /**
   * MONITOR STATE
   */

  useEffect(() => {
    updateSublinksHeight();
    window.addEventListener("resize", updateSublinksHeight);

    return () => {
      window.removeEventListener("resize", updateSublinksHeight);
    };
  });

  /**
   * Update sublink height
   */
  const updateSublinksHeight = () => {
    const height =
      link.sublinks &&
      link.sublinks.length > 0 &&
      liRef.current.querySelector(".sublinks").clientHeight;
    setSublinksHeight(height);
  };

  /**
   *
   * @param {*} event click event
   * @param {*} id   id of the link
   */

  const showSublinks = (event, id) => {
    if (!link.sublinks) {
      adminGlobalState.toggleDashboardSidebar
        ? adminStateDispatcherGlobal({ type: "TOGGLEADMINDASHBOARDSIDEBAR" })
        : "";
      event.stopPropagation();
      return navigate(id);
    }

    adminStateDispatcherGlobal({ type: "SHOWSUBLINKS", payload: { id: id } });
    event.stopPropagation();
  };
  /**\
   * @param {*} event click event
   * Handle onclick on the icons on minimize state
   */
  const handleOnMinimizeIconClick = (event) => {
    adminGlobalState.toggleDashboardSidebar
      ? ""
      : adminStateDispatcherGlobal({ type: "TOGGLEADMINDASHBOARDSIDEBAR" });
  };

  /**
   *
   * @param {*} event click event
   */
  const handleLinkClick = (event) => {
    adminGlobalState.toggleDashboardSidebar
      ? adminStateDispatcherGlobal({ type: "TOGGLEADMINDASHBOARDSIDEBAR" })
      : "";
    event.stopPropagation();
  };

  /**
   * CUSTOM DYNAMIC DOM STYLE
   */
  const liStyle = {
    marginBottom: sublinksHeight,
  };

  return (
    <li
      onClick={() => showSublinks(event, link.to)}
      className={
        adminGlobalState.toggleDashboardSidebar && link.showSublinks
          ? "setMarginForSublinks  activeLink "
          : ""
      }
      ref={liRef}
      style={liStyle}
    >
      <span className="icon" onClick={handleOnMinimizeIconClick}>
        {link.icon}
      </span>
      <span className="caption">{link.title}</span>
      {link.sublinks && link.sublinks.length > 0 && (
        <span className={"showSublinks"}>
          {link.showSublinks ? (
            <GoChevronUp size={20} />
          ) : (
            <GoChevronDown size={20} />
          )}
        </span>
      )}
      <span className={"sublinks"}>
        {adminGlobalState.toggleDashboardSidebar &&
          link.sublinks &&
          link.sublinks.length > 0 &&
          link.showSublinks &&
          link.sublinks.map((sublink) => {
            return (
              <Link key={sublink.to} onClick={handleLinkClick} to={sublink.to}>
                <span className="icon">{sublink.icon}</span>
                <span className="caption">{sublink.title}</span>
              </Link>
            );
          })}
      </span>
    </li>
  );
};

export default LinkPackages;
