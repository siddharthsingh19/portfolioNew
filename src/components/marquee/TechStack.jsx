import React from 'react';
import './TechStack.css';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const TechStack = () => {
  const techStack = [
    { id: 1, name: 'MongoDB', icon: <SiMongodb size={48} /> },
    { id: 2, name: 'Express.js', icon: <SiExpress size={48} /> },
    { id: 3, name: 'React', icon: <SiReact size={48} /> },
    { id: 4, name: 'Node.js', icon: <SiNodedotjs size={48} /> },
  ];

  // Duplicate the array to ensure seamless looping
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="tech-stack-marquee">
      <div className="tech-stack-container">
        {duplicatedStack.map((tech, index) => (
          <div key={index} className="tech-stack-item">
            {tech.icon}
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
