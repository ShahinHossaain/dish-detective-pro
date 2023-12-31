import React, { useContext } from "react";
import ActiveLink from "../../InsideComponent/ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { FaSearchengin } from "react-icons/fa";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavBar = () => {
  const { user, auth, setLoading } = useContext(AuthContext);
  const handleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then()
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <div className="navbar border-4 border-green-500 relative z=10 w-full bg-black rounded-sm text-green-500 font-bold mx-auto px-6">
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70ZVQNDUcNB6vdIFsAehXU_hCI3AqmSxrUA&usqp=CAU"
          className="w-14 hidden md:inline-block border-green-500 border-2 rounded-full"
          alt=""
        />
        <p className="hidden  o_font1 text-lg md:flex items-center ml-1 uppercase">
          Dish
          <FaSearchengin className="text-2xl mr-1" />
          pro
        </p>
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
      <div className="navbar-center md:hidden border-green-500 border-2 rounded-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70ZVQNDUcNB6vdIFsAehXU_hCI3AqmSxrUA&usqp=CAU"
          className="w-12 "
          alt=""
        />
      </div>
      {!user && (
        <div className="navbar-end">
          <Link to="/login">
            <AwesomeButton type="whatsapp" size="medium">
              Log In
            </AwesomeButton>
          </Link>
        </div>
      )}
      {user && (
        <div className="navbar-end h-6">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <img
                src={user.photoURL}
                alt=""
                id="userProfile"
                className="w-12 h-12 rounded-full mr-3 border-2 border-green-500"
              />
            </label>

            <ReactTooltip
              anchorId="userProfile"
              place="bottom"
              variant="success"
              content={user.displayName}
              className="font-bold text-black z-10"
              style={{
                fontWeight: "bold",
                borderRadius: "10px",
                fontSize: "18px",
                backgroundColor: "#22c55e",
                padding: "7px",
              }}
            />
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-gray-800 rounded-box w-52"
            >
              <li>
                <p className=" mr-2 font-mono">{user.displayName}</p>
              </li>
              <li>
                <Link onClick={handleSignOut}>
                  <AwesomeButton type="whatsapp" size="medium">
                    Sign Out
                  </AwesomeButton>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
