import React, { useState, useEffect } from "react";
import "./Services.css";
import { motion, AnimatePresence } from "framer-motion";
import transition from "../../transition";

const Services = () => {
  const handleServiceHover = (serviceId) => {
    setActiveService(serviceId);
  };

  const servicesData = [
    {
      id: 1,
      name: "Web Development",
      description: "Creating responsive and dynamic websites.",
      services: [
        {
          id: 101,
          name: "Frontend Development",
          description: "Building interfaces with React, Vue, or Angular.",
        },
        {
          id: 102,
          name: "Backend Development",
          description:
            "Creating server-side applications with Node.js, Python, or PHP.",
        },
        {
          id: 103,
          name: "Full-Stack Development",
          description: "End-to-end development of web applications.",
        },
      ],
    },
    {
      id: 2,
      name: "Software Development",
      description: "Building custom software solutions.",
      services: [
        {
          id: 201,
          name: "Custom Application Development",
          description:
            "Creating tailored software solutions for specific business needs.",
        },
        {
          id: 202,
          name: "Enterprise Software Solutions",
          description:
            "Developing scalable software solutions for large organizations.",
        },
        {
          id: 203,
          name: "Mobile App Development",
          description:
            "Building native and cross-platform mobile applications.",
        },
      ],
    },
    {
      id: 3,
      name: "UI/UX Design",
      description: "Creating intuitive and appealing user interfaces.",
      services: [
        {
          id: 301,
          name: "UI Design",
          description: "Creating visual elements and layouts.",
        },
        {
          id: 302,
          name: "UX Design",
          description: "Enhancing user experience through research and design.",
        },
        {
          id: 303,
          name: "Prototyping",
          description:
            "Creating interactive prototypes to validate design concepts.",
        },
      ],
    },
    {
      id: 4,
      name: "Digital Marketing",
      description: "Promoting brands and products through digital channels.",
      services: [
        {
          id: 401,
          name: "SEO (Search Engine Optimization)",
          description: "Optimizing websites to improve search engine rankings.",
        },
        {
          id: 402,
          name: "PPC (Pay-Per-Click) Advertising",
          description:
            "Managing paid advertising campaigns to drive traffic and conversions.",
        },
        {
          id: 403,
          name: "Social Media Marketing",
          description:
            "Creating and managing social media campaigns to engage audiences.",
        },
      ],
    },
  ];

  const [activeService, setActiveService] = useState(servicesData[0]?.id); // Default to the first service

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

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="services inner-page"
//     >
//       <div className="services-top">
//         <motion.h1 variants={childVariants} className="fade">
//           Services
//         </motion.h1>
//         <div className="shift-up">
//           <motion.h4 variants={childVariants}>What I Offer</motion.h4>
//           <motion.h2 variants={childVariants} className="red">
//             Services
//           </motion.h2>
//         </div>
//       </div>
//       <div className="services-bottom">
//         <div className="main-services-top">
//           {servicesData.map((mainService) => (
//             <motion.div
//               variants={childVariants}
//               key={mainService.id}
//               className={`main-service ${
//                 activeService === mainService.id ? "active" : ""
//               }`}
//               onMouseEnter={() => handleServiceHover(mainService.id)}
//             >
//               <motion.h3 variants={childVariants}>{mainService.name}</motion.h3>
//             </motion.div>
//           ))}
//         </div>
//         <motion.div variants={childVariants} className="sub-services">
//           <div className="sub-services-list">
//             {servicesData
//               .find((service) => service.id === activeService)
//               ?.services.map((subService) => (
//                 <motion.div
//                   variants={childVariants}
//                   key={subService.id}
//                   className="sub-service"
//                 >
//                   <motion.h4 variants={childVariants}>
//                     {subService.name}
//                   </motion.h4>
//                   <motion.p variants={childVariants}>
//                     {subService.description}
//                   </motion.p>
//                 </motion.div>
//               ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default transition(Services);

// const [activeService, setActiveService] = useState(null);
const [isMobile, setIsMobile] = useState(false);
const [isDrawerOpen, setDrawerOpen] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);

const handleServiceClick = (serviceId) => {
  setActiveService(serviceId);
  if (isMobile) {
    setDrawerOpen(true);
  }
};

return (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="services inner-page"
  >
    {/* Top Section */}
    <div className="services-top">
      <motion.h1 variants={childVariants} className="fade">
        Services
      </motion.h1>
      <div className="shift-up">
        <motion.h4 variants={childVariants}>What I Offer</motion.h4>
        <motion.h2 variants={childVariants} className="red">
          Services
        </motion.h2>
      </div>
    </div>

    {/* Bottom Section (Main Services) */}
    <div className="services-bottom" style={{ height: isMobile ? "50vh" : "auto" }}>
      <div className="main-services-top">
        {servicesData.map((mainService) => (
          <motion.div
            variants={childVariants}
            key={mainService.id}
            className={`main-service ${
              activeService === mainService.id ? "active" : ""
            }`}
            onMouseEnter={() => !isMobile && setActiveService(mainService.id)}
            onClick={() => handleServiceClick(mainService.id)}
          >
            <motion.h3 variants={childVariants}>{mainService.name}</motion.h3>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Show sub-services normally */}
      {!isMobile && (
        <motion.div variants={childVariants} className="sub-services">
          <div className="sub-services-list">
            {servicesData
              .find((service) => service.id === activeService)
              ?.services.map((subService) => (
                <motion.div
                  variants={childVariants}
                  key={subService.id}
                  className="sub-service"
                >
                  <motion.h4 variants={childVariants}>
                    {subService.name}
                  </motion.h4>
                  <motion.p variants={childVariants}>
                    {subService.description}
                  </motion.p>
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </div>

    {/* Mobile: Slide-Up Drawer */}
    {isMobile && (
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="bottom-drawer"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="drawer-header">
              <h3>Services</h3>
              <button onClick={() => setDrawerOpen(false)}>X</button>
            </div>
            <div className="drawer-content">
              {servicesData
                .find((service) => service.id === activeService)
                ?.services.map((subService) => (
                  <div key={subService.id} className="sub-service">
                    <h4>{subService.name}</h4>
                    <p>{subService.description}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )}
  </motion.div>
);
};

export default transition(Services);