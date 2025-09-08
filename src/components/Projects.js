import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "TaskMate",
      description: "A task management PWA app allowing users to create, organize, and track tasks with reminders and statistics.",
      image: '/images/taskmate-dashboard.png',
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "EasyPass",
      description: "Queue & seat management system for exam halls, with real-time seat tracking and QR check-ins.",
      image: '/images/easypass-qr.png',
      technologies: ["React", "Django", "PostgreSQL", "Redux"],
      githubLink: "https://github.com/runocole/easypass",
      liveLink: "#"
    },
    {
      id: 3,
      title: "AI Business Intelligence Platform",
      description: "Conversational AI chatbot with dashboards, predictive analytics, and KPIs for business insights.",
      image: "/images/ai-platform.png",
      technologies: ["Python", "FastAPI", "Scikit-learn", "PostgreSQL"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects, skills, and experience, with smooth animations and responsive design.",
      image: "/images/portfolio.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "#",
      liveLink: "https://runocole.netlify.app"
    },
    {
       id: 6,
      title: "Sports Scouting Platform",
      description: "Football scouting platform with dynamic reports, role-based access, and performance analytics.",
      image: "/images/scouter.png",
      technologies: ["React", "Node.js", "D3.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 6,
      title: "Location-Based E-Commerce",
      description: "Geo-enabled shopping platform with personalized recommendations and smart search for users nearby.",
      image: "/images/location-ecommerce.png",
      technologies: ["Django", "React", "PostgreSQL", "Geolocation APIs"],
      githubLink: "#",
      liveLink: "#"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="text-center mb-12">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-baby-pink mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Here are some of my key projects across Webapps, AI/ML, and personal portfolios.
        </motion.p>
      </div>

      <div className="relative mt-12 px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Slider ref={sliderRef} {...settings}>
            {projects.map(project => (
              <div key={project.id} className="focus:outline-none px-2">
                <div className="bg-black border border-baby-pink/20 rounded-xl overflow-hidden shadow-xl shadow-baby-pink/10">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <h3 className="absolute bottom-4 left-4 text-3xl font-cursive text-baby-pink">{project.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-baby-pink bg-opacity-20 text-baby-pink rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <motion.a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-white hover:text-baby-pink transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub />
                          <span>GitHub</span>
                        </motion.a>
                        
                        <motion.a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-white hover:text-baby-pink transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </motion.a>
                      </div>
                      
                      <motion.button
                        className="text-sm font-medium py-2 px-4 rounded-full bg-baby-pink text-black"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        
        <div className="mt-8 text-center">
          <motion.a 
            href="https://github.com/runocole" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-baby-pink hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            <span>View more projects on GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
