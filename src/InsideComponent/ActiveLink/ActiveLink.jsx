import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "bg-slate-400 mx-3" : "mx-3")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
