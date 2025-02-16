import React from "react";
import "./About.css";
import TechStackMarquee from "../../components/marquee/TechStack";
const About = () => {
  return (
    <div className="about inner-page">
      <div className="about-top">
        <h1 className="fade">About</h1>
        <div className="shift-up">
          <h4>Get to know me</h4>
          <h2 className="red">About Me</h2>
        </div>
      </div>
      <div className="about-bottom">
        <p>
          As a dedicated MERN stack developer, I specialize in creating robust,
          scalable web applications that drive business growth and enhance user
          experiences. With expertise across the MERN stack, I emphasize agile,
          collaborative development to deliver clean, scalable code that ensures
          project success and client satisfaction.
        </p>
        <div className="stack">
          <TechStackMarquee />
        </div>
      </div>
    </div>
  );
};

export default About;
