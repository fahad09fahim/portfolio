import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 ">
      <div class="navbar bg-primary text-white font-bold">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black-400 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/14TsnjWbXgg08XAL2wC0VfUeufh8wu7Qw/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link to="/skill">Skill</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
            </ul>
          </div>
          <a class="normal-case text-3xl ">Fahim</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/14TsnjWbXgg08XAL2wC0VfUeufh8wu7Qw/view?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li tabindex="0">
              <Link to="/skill">Skill</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
