import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import NavThemeToggle from "./NavThemeToggle";

const Navbar = () => {

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <a to="/">Homepage</a>
              </li>
              <li>
                <a to="/meal">All Gigs</a>
              </li>
              <li tabIndex={0}>
                <a className="flex justify-between">
                  <p>Developer</p>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"y
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-200">
                  <li>
                    <a>Developer Profile</a>
                  </li>
                  <li>
                    <a>Manage Gigs</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="flex justify-between">
                  <p>Admin</p>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-200">
                  <li>
                    <a>All Users</a>
                  </li>
                  <li>
                    <a>All Developers</a>
                  </li>
                  <li>
                    <a>Manage Gigs</a>
                  </li>
                  <li>
                    <a>Issues</a>
                  </li>
                </ul>
              </li>
              <li>
                <a to="/bazar">Contact Admin</a>
              </li>
              <li>
                <a to="/bazar">Chat</a>
              </li>
              <li>
                <a to="">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            target="_blank"
            rel="noreferrer"
            href=""
            className="btn btn-ghost flex justify-between items-center  normal-case text-xl"
          >
            DevHive
          </a>
        </div>
        <div className="navbar-end">
          {/* theme start  */}
          <NavThemeToggle></NavThemeToggle>

          {/* theme toggle end  */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="username" src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <a to="/profile" className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a to="/settings" className="justify-between">
                  Settings
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a to="/history" className="justify-between">
                  Track History
                </a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-ghost btn-circle">
            <a to="/login">
              <AiOutlineLogin className="w-7 h-7" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
