import React from "react";
import transition from "../../transition";
import {motion} from "framer-motion";
const Blogs = () => {

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
      <motion.div  variants={containerVariants}
      initial="hidden"
      animate="visible" className="blogs inner-page">
        <div className="blogs-top">
          <motion.h1 variants={childVariants} className="fade">Blogs</motion.h1>
          <div className="shift-up">
            <motion.h4 variants={childVariants}>Explore my Musings</motion.h4>
            <motion.h2 variants={childVariants} className="red">Discover Insights</motion.h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default transition(Blogs);
