import React from "react";
import "./Contact.css";
import transition from "../../transition";
import { motion } from "framer-motion";
const Contact = () => {
  const contactInfo = [
    { id: 1, type: "Phone", value: "+1234567890" },
    { id: 2, type: "Email", value: "example@example.com" },
    { id: 3, type: "WhatsApp", value: "+1234567890" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

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
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="contact inner-page"
      >
        <div className="contact-top">
          <motion.h1 variants={childVariants} className="fade">
            Contact
          </motion.h1>
          <div className="shift-up">
            <motion.h4 variants={childVariants}>Get in Touch</motion.h4>
            <motion.h2 variants={childVariants} className="red">Reach Me</motion.h2>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom-left">
            {contactInfo.map((info) => (
              <motion.div variants={childVariants} key={info.id} className="contact-box">
                <motion.h3 variants={childVariants}>{info.type}</motion.h3>
                <motion.p variants={childVariants}>{info.value}</motion.p>
              </motion.div>
            ))}
          </div>
          <div className="contact-bottom-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="flex g20">
                <motion.input variants={childVariants} type="text" placeholder="Name" />
                <motion.input variants={childVariants} type="email" placeholder="Email" />
              </div>
              <motion.textarea variants={childVariants} placeholder="Message" rows={5}></motion.textarea>
              <motion.button variants={childVariants} type="submit" className="submit-btn">
                Send
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default transition(Contact);
