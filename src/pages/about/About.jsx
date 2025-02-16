import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import TechStackMarquee from "../../components/marquee/TechStack";
import transition from "../../transition";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay children animations
        staggerChildren: 0.2, // Stagger children animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="about inner-page"
    >
      <div className="about-top">
        <motion.h1 variants={childVariants} className="fade">About</motion.h1>
        <div className="shift-up">
          <motion.h4 variants={childVariants}>Get to know me</motion.h4>
          <motion.h2 variants={childVariants} className="red">About Me</motion.h2>
        </div>
      </div>
      <div className="about-bottom">
        <motion.p variants={childVariants}>
          As a dedicated MERN stack developer, I specialize in creating robust,
          scalable web applications that drive business growth and enhance user
          experiences. With expertise across the MERN stack, I emphasize agile,
          collaborative development to deliver clean, scalable code that ensures
          project success and client satisfaction.
        </motion.p>
        <motion.div variants={childVariants} className="stack">
          <TechStackMarquee />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default transition(About);
