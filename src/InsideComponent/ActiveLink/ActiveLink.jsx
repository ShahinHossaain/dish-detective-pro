import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-2 border-green-500 mx-3 o_font1" : "mx-3"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
