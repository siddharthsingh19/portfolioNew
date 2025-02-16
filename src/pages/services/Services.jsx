import React, { useState } from "react";
import "./Services.css";

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

  return (
    <div const className="services inner-page">
      <div className="services-top">
        <h1 className="fade">Services</h1>
        <div className="shift-up">
          <h4>What I Offer</h4>
          <h2 className="red">Services</h2>
        </div>
      </div>
      <div className="services-bottom">
        <div className="main-services-top">
          {servicesData.map((mainService) => (
            <div
              key={mainService.id}
              className={`main-service ${
                activeService === mainService.id ? "active" : ""
              }`}
              onMouseEnter={() => handleServiceHover(mainService.id)}
            >
              <h3>{mainService.name}</h3>
            </div>
          ))}
        </div>
        <div className="sub-services">
          <div className="sub-services-list">
            {servicesData
              .find((service) => service.id === activeService)
              ?.services.map((subService) => (
                <div key={subService.id} className="sub-service">
                  <h4>{subService.name}</h4>
                  <p>{subService.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
