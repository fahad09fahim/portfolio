import React from "react";
import skill1 from "../Image/skill1.png";
import skill2 from "../Image/skill2.png";
import skill3 from "../Image/skill3.png";
import skill4 from "../Image/skill4.png";
const Service = () => {
  return (
    <div className="text-white mb-5 mt-5">
      <h1 className="text-5xl text-accent mb-9 ">Skills:</h1>
      <div className="flex  flex-col lg:flex-row gap-5 items-center">
        <div class="card card-compact w-96 bg-primary shadow-xl">
          <figure>
            <img src={skill1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title  text-secondary">Front-End</h2>
            <p className="text-xl">
              I can develope responsive website with Html5, CSS3 and Basic
              Javascript.
            </p>
            <div class="card-actions justify-center">
              <span class="badge badge-lg">HTML5</span>
              <span class="badge badge-lg">CSS3</span>
              <span class="badge badge-lg">JAVASCRIPT</span>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-primary shadow-xl">
          <figure>
            <img src={skill2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">React Js</h2>
            <p className="text-xl">
              I can develop single page application with React Js and set React
              Router.
            </p>
            <div class="card-actions justify-center">
              <span class="badge badge-lg">React Js</span>
              <span class="badge badge-lg">React Router</span>
              <span class="badge badge-lg">React Icon</span>
              <span class="badge badge-lg">Bootstrap</span>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-primary shadow-xl">
          <figure>
            <img src={skill3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">Firebase Authentication</h2>
            <p className="text-xl">
              I can implement firebase authentication system with Native
              providers and social providers.
            </p>
            <div class="card-actions justify-center">
              <span class="badge badge-lg">Firebase</span>
              <span class="badge badge-lg">JWT</span>
              <span class="badge badge-lg">React Router</span>
              <span class="badge badge-lg">Tailwind</span>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-primary shadow-xl">
          <figure>
            <img src={skill4} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-secondary">MERN Stack</h2>
            <p className="text-xl">
              I can develop fullstack web application with MongoDb,Express
              Js,React Js,Node Js .{" "}
            </p>
            <div class="card-actions justify-center">
              <span class="badge badge-lg">MongoDb</span>
              <span class="badge badge-lg">Express Js</span>
              <span class="badge badge-lg">React Js</span>
              <span class="badge badge-lg">Node Js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
