import '../styles/Projects.css';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTools, 
  FaTimes,
  FaReact,
  FaPython,
  FaDatabase,
  FaCode
} from 'react-icons/fa';
import { SiFramer, SiOpenai, SiMongodb, SiFlask } from 'react-icons/si';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Framer Motion, featuring smooth animations and interactive elements.",
      longDescription: "This portfolio website showcases my skills and projects using modern web technologies. It features smooth page transitions, interactive elements, and responsive design. Built with React and enhanced with Framer Motion for fluid animations, this project demonstrates my frontend development capabilities and eye for design.",
      image: "/projects/portfolio.png",
      technologies: ["React", "Framer Motion", "CSS3"],
      category: "web",
      github: "https://github.com/Deepakdumka1/Deepakdumka1?tab=repositories",
      demo: "https://deepakdumka.com",
      features: [
        "Responsive Design for all devices",
        "Smooth Page Transitions",
        "Interactive UI Elements",
        "Modern Glass Morphism Design",
        "Dynamic Project Showcase",
        "Contact Form Integration"
      ],
      icons: {
        main: FaReact,
        secondary: SiFramer
      }
    },
    {
      title: "Smart AI Generator",
      description: "An AI-powered content generation tool that creates various types of content using OpenAI's GPT models.",
      longDescription: "Smart AI Generator is a sophisticated tool that leverages OpenAI's GPT models to generate high-quality content. The application provides various content generation options including text, code, and creative writing, with an intuitive user interface and real-time generation capabilities.",
      image: "/projects/smart_ai_generator.jpg",
      technologies: ["React", "Node.js", "OpenAI API", "Express", "MongoDB"],
      category: "ai",
      github: "https://github.com/Deepakdumka1/Deepakdumka1?tab=repositories",
      demo: "https://ai-generator.deepakdumka.com",
      features: [
        "Multiple Content Generation Types",
        "Real-time AI Processing",
        "User Authentication",
        "History Tracking",
        "Customizable Generation Parameters",
        "Responsive Design"
      ],
      icons: {
        main: SiOpenai,
        secondary: FaReact
      }
    },
    {
      title: "Library Management System",
      description: "A comprehensive library management solution built with Python and MongoDB, featuring inventory tracking and user management.",
      longDescription: "This Library Management System is a full-featured application designed to streamline library operations. It includes modules for book management, user tracking, borrowing systems, and administrative controls. The system uses Python for backend operations and MongoDB for efficient data management.",
      image: "/projects/library_mangement_system.png",
      technologies: ["Python", "MongoDB", "Flask", "Bootstrap", "JWT"],
      category: "backend",
      github: "https://github.com/Deepakdumka1?tab=repositories",
      demo: "https://library.deepakdumka.com",
      features: [
        "Book Inventory Management",
        "User Authentication & Authorization",
        "Borrowing & Return System",
        "Fine Calculation",
        "Search & Filter Capabilities",
        "Admin Dashboard",
        "Report Generation"
      ],
      icons: {
        main: FaPython,
        secondary: SiMongodb
      }
    },
    {
      title: "Campus Connect Website",
      description: "A comprehensive campus networking platform connecting students, faculty, and administrators with real-time updates and resource sharing.",
      longDescription: "Campus Connect is a modern web platform designed to enhance campus communication and collaboration. It features real-time notifications, resource sharing, event management, and a unified dashboard for campus activities. Built with React for the frontend and Node.js for the backend, it provides a seamless experience for all campus stakeholders.",
      image: "/projects/campus_connect.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      category: "web",
      github: "https://github.com/Deepakdumka1?tab=repositories",
      demo: "https://campus-connect.deepakdumka.com",
      features: [
        "Real-time Campus Updates",
        "Event Management System",
        "Resource Sharing Platform",
        "Interactive Discussion Forums",
        "Student-Faculty Communication",
        "Responsive Dashboard",
        "Role-based Access Control"
      ],
      icons: {
        main: FaReact,
        secondary: SiMongodb
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'web', label: 'Web Development', icon: FaReact },
    { id: 'ai', label: 'AI Projects', icon: SiOpenai },
    { id: 'backend', label: 'Backend', icon: FaDatabase }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <div className="projects-bg">
        <div className="gradient-blur"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            className="floating-shape"
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="projects-content">
        <motion.div
          className="projects-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>My Projects</h1>
          <p className="subtitle">Explore my recent work and creative endeavors</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="category-icon" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                className="project-card"
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.button
                      className="view-details-btn"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-icons">
                      <project.icons.main className="project-icon main" />
                      <project.icons.secondary className="project-icon secondary" />
                    </div>
                  </div>
                  
                  <p>{project.description}</p>

                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaTools className="tech-icon" />
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="demo-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <motion.button 
                  className="close-modal"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>

                <div className="modal-content">
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                  
                  <div className="modal-info">
                    <div className="modal-header">
                      <h2>{selectedProject.title}</h2>
                      <div className="modal-icons">
                        <selectedProject.icons.main className="modal-icon" />
                        <selectedProject.icons.secondary className="modal-icon" />
                      </div>
                    </div>

                    <p className="modal-description">{selectedProject.longDescription}</p>

                    <div className="modal-features">
                      <h3>Key Features</h3>
                      <ul>
                        {selectedProject.features.map((feature, index) => (
                          <motion.li 
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-technologies">
                      <h3>Technologies Used</h3>
                      <div className="tech-tags">
                        {selectedProject.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="tech-tag"
                            whileHover={{ scale: 1.1 }}
                          >
                            <FaTools className="tech-icon" />
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-actions">
                      <motion.a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="github-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> View Code
                      </motion.a>
                      <motion.a 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="demo-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;