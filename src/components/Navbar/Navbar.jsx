import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childVariants} className="nav-logo">
          <NavLink to="/">
            <span className="red">Ṧ</span>!d.
          </NavLink>
        </motion.div>
        <div className="nav-center">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <button className="btn">Hire me</button>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
