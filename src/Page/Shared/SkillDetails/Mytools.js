import React from "react";
import ss1 from "../../../Image/mytools/mytools1s.png";
import ss2 from "../../../Image/mytools/mytools2s.png";
import ss3 from "../../../Image/mytools/mytools3.png";

const Mytools = () => {
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
          ●For authentication Firebase use in this site and also use
          React-firebase-hook for authentication function. <br />
          ●For icon in this project use react-icons. <br />
          ●For toast notification i use react-toastify and alert.
          <br />
          ●This website is responsive for small device and large device.
          <br />
          ●This project use MongoDb for server.
          <br />
          ●In this project we use tailwind css and daisy ui for style
        </p>
      </div>
      <a
        className="badge badge-lg btn-secondary "
        href="https://my-tools-2ac7c.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        Live Website
      </a>
      <a
        className="badge badge-lg btn-secondary"
        href="https://github.com/fahad09fahim/my-tools-client"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default Mytools;
