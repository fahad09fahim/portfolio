import React from "react";

const About = () => {
  return (
    <div className=" my-3 text-center text-white flex flex-row">
      <div>
        <img
          className=" h-32 w-36 rounded-3xl"
          src="https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?t=st=1654877072~exp=1654877672~hmac=d2dde1810fd2387a7cce6c454fa0e8708763a6e8f045efbf172eceb39f760edc"
          alt="about me"
        />
      </div>
      <div>
        <h1 className="font-bold">About Me:</h1>
        <p className="text-center text-xl">
          Hi, I am Fahim, Front-end Developer. I have experience on Html5, Css3,
          Javascript.I Have done my project with React,Bootstrap,Tailwind,Daisy
          ui and so many technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
