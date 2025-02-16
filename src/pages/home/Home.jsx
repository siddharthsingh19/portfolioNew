import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h1 className="side-effect">Ṧ</h1>
      </div>
      <div className="home-right">
        <h3 className="mb-1">Hello, I'm</h3>
        <br />
        <h1 className="mb-1">
          <span className="red ">Siddharth Singh</span>
        </h1>
        <h2>
          <span className="red ">Full-Stack Developer</span>
        </h2>
        <h2>
          Turning !deas into real life
          <br />
          <span className="red">products</span> is my calling.
        </h2>
        <div className="home-socials">
          <FaGithub />
          <FaLinkedin />
        </div>
        <button className="btn home-right-btn">Hire me</button>
      </div>
    </div>
  );
};

export default Home;
