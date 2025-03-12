import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaLaptopCode, FaBookReader } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "MongoDB"] },
    { category: "Tools", items: ["Git", "VS Code", "Docker", "Webpack"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"] }
  ];

  const education = [
    {
      degree: "BTech in Computer Science",
      institution: "Graphic Era Hill University",
      period: "2023 - 2027",
      description: "Focusing on computer science fundamentals, web development, and software engineering principles."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section className="about-hero" variants={itemVariants}>
        <div className="hero-content">
          <h1>About Me</h1>
          <p className="hero-text">
            Passionate developer crafting digital experiences through clean code and innovative solutions.
          </p>
        </div>
        <div className="hero-image">
          {/* Add your professional photo here */}
          <img src="/profile-img.jpg" alt="Professional portrait" />
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section className="about-section" variants={itemVariants}>
        <h2><FaBookReader className="section-icon" /> Introduction</h2>
        <div className="introduction-content">
          <p>
            Hello! I'm Deepak Dumka, a BTech student and aspiring software developer with a passion for creating 
            innovative web solutions. I believe in the power of technology to solve real-world problems and am 
            constantly exploring new technologies to expand my skillset.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge with the developer community.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="about-section skills-section" variants={itemVariants}>
        <h2><FaCode className="section-icon" /> Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <motion.div 
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section className="about-section" variants={itemVariants}>
        <h2><FaGraduationCap className="section-icon" /> Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="timeline-period">{edu.period}</p>
                <p className="timeline-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Interests Section */}
      <motion.section className="about-section" variants={itemVariants}>
        <h2><FaLaptopCode className="section-icon" /> Interests & Goals</h2>
        <div className="interests-grid">
          <motion.div 
            className="interest-card"
            whileHover={{ y: -10 }}
          >
            <h3>Web Development</h3>
            <p>Passionate about creating responsive and user-friendly web applications.</p>
          </motion.div>
          <motion.div 
            className="interest-card"
            whileHover={{ y: -10 }}
          >
            <h3>Open Source</h3>
            <p>Contributing to and learning from the open-source community.</p>
          </motion.div>
          <motion.div 
            className="interest-card"
            whileHover={{ y: -10 }}
          >
            <h3>AI & Machine Learning</h3>
            <p>Exploring the possibilities of artificial intelligence and machine learning.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="about-cta"
        variants={itemVariants}
      >
        <h2>Let's Work Together!</h2>
        <p>Interested in collaborating or learning more about my work?</p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/contact'}
        >
          Get in Touch
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default About;