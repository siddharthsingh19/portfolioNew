import React from "react";
import shakuntala from "/shakuntala.png";
import baapu from "/baapu.png";
import naiminath from "/naiminath.png";
import "./Portfolio.css";
import { FaArrowRight } from "react-icons/fa";
const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      title: "Dr. Shakuntala Ayurvedic Medical College",
      description: "Description of Project 1.",
      image: shakuntala, // Replace with actual image path
      link: "https://example.com/project1", // Replace with project link
    },
    {
      id: 2,
      title: "Naiminath Ayurvedic Medical College",
      description: "Description of Project 2.",
      image: naiminath, // Replace with actual image path
      link: "https://example.com/project2", // Replace with project link
    },
    {
      id: 3,
      title: "BAPU Ayurvedic Medical College",
      description: "Description of Project 3.",
      image: baapu, // Replace with actual image path
      link: "https://example.com/project2", // Replace with project link
    },
    // Add more portfolio items as needed
  ];

  return (
    <div const className="portfolio inner-page">
      <div className="portfolio-top">
        <h1 className="fade">Portfolio</h1>
        <div className="shift-up">
          <h4>My Works</h4>
          <h2 className="red">Portfolio</h2>
        </div>
      </div>
      <div className="portfolio-bottom">
        <div className="portfolio-items">
          {portfolioData.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
          <div className="more-works">
            View More Projects <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
