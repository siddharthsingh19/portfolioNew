import React from "react";
import { motion } from "framer-motion";
import "./Hire.css";

const HireMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Optionally integrate EmailJS, Formspree, or backend
  };

  return (
    <motion.div
      className="hire-me-page inner-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={childVariants}>🚀 Hire Me</motion.h1>
      <motion.p variants={childVariants}>
        I’m open to freelance or full-time opportunities. If you have a project
        or role in mind, let’s talk!
      </motion.p>

      <motion.a
        href="/Siddharth-SinghResume.pdf"
        download
        className="btn resume-btn"
        variants={childVariants}
      >
        📄 Download Resume
      </motion.a>

      <motion.div className="skills" variants={childVariants}>
        <h3>💻 My Skills</h3>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Framer Motion</li>
          <li>Node.js</li>
          <li>Figma</li>
          <li>Git & GitHub</li>
        </ul>
      </motion.div>

      <motion.div className="contact-section" variants={childVariants}>
        <h3>📬 Contact Me</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="direct-contact">
          <p>Email: <a href="mailto:siddharth.singh1903@gmail.com">siddharth.singh1903@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/917275747545" target="_blank" rel="noreferrer">+91 7275 7475 45</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/siddharthsingh193" target="_blank" rel="noreferrer">linkedin.com/in/siddharthsingh193</a></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HireMe;
