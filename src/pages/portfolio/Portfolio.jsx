import React from "react";
import { motion } from "framer-motion";
import shakuntala from "/shakuntala.png";
import baapu from "/baapu.png";
import naiminath from "/naiminath.png";
import "./Portfolio.css";
import { FaArrowRight } from "react-icons/fa";
import transition from "../../transition";
const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      title: "Dr. Shakuntala Ayurvedic Medical College",
      description: "College website",
      image: shakuntala, // Replace with actual image path
      link: "https://drshakuntalaayush.in/", // Replace with project link
    },
    {
      id: 2,
      title: "Naiminath Ayurvedic Medical College",
      description: "College website",
      image: naiminath, // Replace with actual image path
      link: "https://naiminathayurveda.org/", // Replace with project link
    },
    {
      id: 3,
      title: "BAPU Ayurvedic Medical College",
      description: "College website",
      image: baapu, // Replace with actual image path
      link: "https://bamch.in/", // Replace with project link
    },
    // Add more portfolio items as needed
  ];

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
      className="portfolio inner-page"
    >
      <div className="portfolio-top">
        <motion.h1 variants={childVariants} className="fade">
          Portfolio
        </motion.h1>
        <div className="shift-up">
          <motion.h4 variants={childVariants}>My Works</motion.h4>
          <motion.h2 variants={childVariants} className="red">
            Portfolio
          </motion.h2>
        </div>
      </div>
      <div className="portfolio-bottom">
        <div className="portfolio-items">
          {portfolioData.map((item) => (
            <motion.div
              variants={childVariants}
              key={item.id}
              className="portfolio-item"
            >
              <motion.img
                variants={childVariants}
                src={item.image}
                alt={item.title}
              />
              <motion.div
                variants={childVariants}
                className="portfolio-item-content"
              >
                <motion.h3 variants={childVariants}>{item.title}</motion.h3>
                {/* <motion.p variants={childVariants}>{item.description}</motion.p> */}
                <motion.a
                  variants={childVariants}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
          <motion.div variants={childVariants} className="more-works">
            View More Projects <FaArrowRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default transition(Portfolio);
