import React from "react";
import ss1 from "../../../Image/SportsFlash/sports1.png";
import ss2 from "../../../Image/SportsFlash/sports2.png";
import ss3 from "../../../Image/SportsFlash/sports3.png";

const SportsFlash = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl lg:text-3xl text-white">More About My Tools:</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div class="card card-compact    bg-primary shadow-xl">
          <figure>
            <img src={ss1} alt="mytools" />
          </figure>
        </div>
        <div class="card card-compact bg-primary shadow-xl">
          <figure>
            <img src={ss2} alt="mytools" />
          </figure>
        </div>
        <div class="card card-compact  bg-primary shadow-xl">
          <figure>
            <img src={ss3} alt="mytools" />
          </figure>
        </div>
      </div>
      <div className="card card-compact w-auto bg-primary shadow-xl text-white text-xl p-3 m-2">
        <p>
          ●This project is build with React. <br />
          ●Css framework React-Bootstrap use for add extra style in this
          project.
          <br />
          ● vanilla css for adding style.
          <br />
          ●For authentication Firebase use in this site and also use
          React-firebase-hook for authentication function.
          <br />
          ●For icon in this project i use react-icons.
          <br />
          ●For toast notification i use react-toastify.
          <br />
          ●This website is responsive for small device and large device.
        </p>
      </div>
      <a
        className="badge badge-lg"
        href="https://sports-flash.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        Live Website
      </a>
      <a
        className="badge badge-lg"
        href="https://github.com/fahad09fahim/Sports-Flash"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default SportsFlash;
