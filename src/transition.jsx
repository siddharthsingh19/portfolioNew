import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.h1
        initial={{ x: "100%",y:"50%", opacity: 0 }}
        animate={{ x: "-100%", y:"50%", opacity: 0 }}
        exit={{ x: "20%", y:"30%", opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="transition-text"
      >
        Ṧ!d.
      </motion.h1>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
