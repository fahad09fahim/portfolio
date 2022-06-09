import React from "react";
import avatar from "../Image/avatar.png";

const Home = () => {
  return (
    <div className="text-white">
      <div class="hero min-h-screen bg-primary">
        <div class="hero-content flex-col   lg:flex-row-reverse">
          <div class="avatar">
            <div class="w-56 rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-bold">Hi! I'm Fahad Al Fahim</h1>
            <p class="py-6">Front-End Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
