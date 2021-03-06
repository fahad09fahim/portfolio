import React from "react";
import "./Projects.css";
import web from "../Image/web.png";
import web2 from "../Image/web2.png";
import web3 from "../Image/web3.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="mt-5 text-white mb-5">
      <p className="text-4xl text-accent">Projects:</p>
      <div className="flex flex-col lg:flex-row gap-5 items-center mt-5  ">
        <div class="card card-compact w-80 bg-primary shadow-xl">
          <figure>
            <img src={web} alt="mytools" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">My Tools</h2>
            <p className="text-xl">
              ● This is a manufacturer base website. <br />
              ● This project is build with React. <br />
            </p>
            <Link className="badge badge-lg" to="/mytools">
              Details
            </Link>
          </div>
        </div>
        <div class="card card-compact w-80 bg-primary shadow-xl">
          <figure>
            <img src={web2} alt="GoPort" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">Go Port</h2>
            <p className="text-xl">
              ● This is a warehouse base website. <br />● This project use
              MongoDb for server.
            </p>
            <Link className="badge badge-lg" to="/goport">
              Details
            </Link>
          </div>
        </div>
        <div class="card card-compact w-80 bg-primary shadow-xl">
          <figure>
            <img src={web3} alt="sports flash" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">Sports Flash</h2>
            <p className="text-xl">
              ● This is a photographer hire website. <br />● Css framework
              React-Bootstrap use in this project.
            </p>
            <Link className="badge badge-lg" to="/sportsFlash">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
