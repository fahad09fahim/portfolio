import React from "react";
import avatar from "../Image/avatar.png";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Service from "./Service";
import Footer from "./Shared/Footer";

const Home = () => {
  return (
    <div className="text-white">
      <div class="hero min-h-screen bg-primary">
        <div class="hero-content flex-col   lg:flex-row-reverse">
          <div class="avatar px-0 lg: px-11 ">
            <div class="w-56 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-bold">Hi! I'm Fahad Al Fahim</h1>
            <p class="py-6">Front-End Web Developer</p>
            <a
              rel="noreferrer"
              target="_blank"
              className="btn btn-secondary"
              href="https://drive.google.com/file/d/14TsnjWbXgg08XAL2wC0VfUeufh8wu7Qw/view?usp=sharing"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <hr />
      <Service />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
