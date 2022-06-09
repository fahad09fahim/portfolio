import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-black-400 text-white px-0 py-0  lg:px-32 lg:py-16  ">
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
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/14TsnjWbXgg08XAL2wC0VfUeufh8wu7Qw/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
          <a class="normal-case text-3xl mx-5 ">Fahim</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
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
              <a>Services</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
