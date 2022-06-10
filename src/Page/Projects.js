import React from "react";
import "./Projects.css";
import web from "../Image/web.png";
import web2 from "../Image/web2.png";
import web3 from "../Image/web3.png";

const Projects = () => {
  return (
    <div className="mt-5 text-white">
      <p className="text-4xl text-accent">Projects:</p>
      <div className="flex flex-col lg:flex-row gap-5 items-center mt-5">
        <div class="card card-compact w-80 bg-primary shadow-xl">
          <figure>
            <img src={web} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">My Tools</h2>
            <p className="text-xl">
              ● This is a manufacturer base website. <br />
              ● This project is build with React. <br />
              ● For authentication Firebase use in this site and also use
              React-firebase-hook for authentication function. <br />●
              React-firebase-hook for authentication function.
            </p>
            <a
              className="badge badge-lg"
              href="https://my-tools-2ac7c.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Website
            </a>
            <a
              className="badge badge-lg"
              href="https://github.com/fahad09fahim/my-tools-client"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div class="card card-compact w-80 bg-primary shadow-xl">
          <figure>
            <img src={web2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">Go port</h2>
            <p className="text-xl">
              ● This is a warehouse base website. <br />
              ● This project is build with React. <br />● This website is
              responsive for small device and large device. <br />● This project
              use MongoDb for server. <br />● React-bootstrap use in this
              project to implement style.
            </p>
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
        </div>
        <div class="card card-compact w-80 bg-primary shadow-xl">
          <figure>
            <img src={web3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">Sports Flash</h2>
            <p className="text-xl">
              ● This is a photographer hire website. <br />
              ● This project is build with React. <br />
              ● Css framework React-Bootstrap use for implement extra style in
              this project. <br />● Also use vanilla css for implement style.{" "}
              <br />● Firebase for authentication.
            </p>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
