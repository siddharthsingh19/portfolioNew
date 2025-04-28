import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
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

        {/* Hamburger icon - only visible on mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Regular nav - hidden on mobile */}
        <div className={`nav-center ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleNavClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleNavClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleNavClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={handleNavClick}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" onClick={handleNavClick}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleNavClick}>
                Contact
              </NavLink>
            </li>
            <button className="btn" onClick={handleNavClick}>
              Hire me
            </button>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
