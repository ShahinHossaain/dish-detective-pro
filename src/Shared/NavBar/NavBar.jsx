import React from "react";
import ActiveLink from "../../InsideComponent/ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const NavBar = () => {
  return (
    <div className="navbar relative z=10 w-full bg-green-500 text-white mx-auto px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li tabIndex={0}>
              <ActiveLink to="/blog">Blogs</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About Us</ActiveLink>
            </li>
          </ul>
        </div>
        <img
          src="https://i.ibb.co/nmP4661/logo.png"
          className="w-36 rounded-md hidden md:inline-block"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li tabIndex={0}>
            <ActiveLink to="/blog">Blogs</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-center md:hidden">
        <img
          src="https://i.ibb.co/nmP4661/logo.png"
          className="w-36 rounded-md"
          alt=""
        />
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <AwesomeButton type="danger" size="medium">
            Log In
          </AwesomeButton>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
