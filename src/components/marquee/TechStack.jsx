import React from 'react';
import './TechStack.css';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiMongoose, SiTailwindcss, SiLinux, SiGit, SiGithub, SiNextdotjs, SiNetlify, SiPostman, SiRedux, SiBootstrap, SiNginx, SiCpanel, SiHostinger, SiJsonwebtokens } from 'react-icons/si';

const TechStack = () => {
  const techStack = [
    { id: 1, name: 'MongoDB', icon: <SiMongodb size={48} /> },
    { id: 2, name: 'Express.js', icon: <SiExpress size={48} /> },
    { id: 3, name: 'React', icon: <SiReact size={48} /> },
    { id: 4, name: 'Node.js', icon: <SiNodedotjs size={48} /> },
    { id: 5, name: 'HTML5', icon: <SiHtml5 size={48} /> },
    { id: 6, name: 'CSS3', icon: <SiCss3 size={48} /> },
    { id: 7, name: 'JavaScript', icon: <SiJavascript size={48} /> },
    { id: 8, name: 'TypeScript', icon: <SiTypescript size={48} /> },
    { id: 9, name: 'Mongoose', icon: <SiMongoose size={48} /> },
    { id: 10, name: 'TailwindCSS', icon: <SiTailwindcss size={48} /> },
    { id: 11, name: 'Linux', icon: <SiLinux size={48} /> },
    { id: 12, name: 'Git', icon: <SiGit size={48} /> },
    { id: 13, name: 'Github', icon: <SiGithub size={48} /> },
    { id: 13, name: 'Next.js', icon: <SiNextdotjs size={48} /> },
    { id: 13, name: 'Netlify', icon: <SiNetlify size={48} /> },
    { id: 13, name: 'Postman', icon: <SiPostman size={48} /> },
    { id: 13, name: 'Redux', icon: <SiRedux size={48} /> },
    { id: 13, name: 'Bootstrap', icon: <SiBootstrap size={48} /> },
    { id: 13, name: 'Nginx', icon: <SiNginx size={48} /> },
    { id: 13, name: 'Cpanel', icon: <SiCpanel size={48} /> },
    { id: 13, name: 'Hostinger', icon: <SiHostinger size={48} /> },
    { id: 13, name: 'JWT', icon: <SiJsonwebtokens size={48} /> },
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
