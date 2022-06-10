import React from "react";
import ss1 from "../../../Image/Goport/goport1.png";
import ss2 from "../../../Image/Goport/goport2.png";
import ss3 from "../../../Image/Goport/goport3.png";

const Goport = () => {
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
          React-firebase-hook for authentication function.
          <br />
          ●For icon in this project i use react-icons.
          <br />
          ●For toast notification i use react-toastify.
          <br />
          ●This website is responsive for small device and large device.
          <br />
          ●This project use MongoDb for server.
          <br />
          ●In this project we use react-bootstrap for style
        </p>
      </div>
      <a
        className="badge badge-lg"
        href="https://goport-ddcec.web.app/"
        target="_blank"
        rel="noreferrer"
      >
        Live Website
      </a>
      <a
        className="badge badge-lg"
        href="https://github.com/fahad09fahim/go-port-client"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default Goport;
