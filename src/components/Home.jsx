import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowDown, 
  FaBriefcase, 
  FaExternalLinkAlt, 
  FaCode, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hi, I'm Deepak Dumka";
  const typingSpeed = 100;
  const cursorRef = useRef(null);
  const controls = useAnimation();

  // Removed 3D effect code for status card

  useEffect(() => {
    let timeouts = [];
    let mounted = true;

    const typeText = () => {
      for (let i = 0; i <= fullText.length; i++) {
        const timeout = setTimeout(() => {
          if (mounted) {
            setText(fullText.slice(0, i));
            if (i === fullText.length) {
              setIsTypingComplete(true);
            }
          }
        }, typingSpeed * i);
        timeouts.push(timeout);
      }
    };

    // Start typing animation
    typeText();

    // Cleanup function
    return () => {
      mounted = false;
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  // Removed card 3D effect handlers
  return (
    <div className="home-container">
      {/* Animated particle background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-section">
          <motion.div
            className="profile-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <div className="profile-picture">
              {/* Add your profile picture here */}
              <img src="/profile-img.jpg" alt="Deepak Dumka" />
            </div>
          </motion.div>

          <div className="text-content">
            <motion.h1
              className="animated-text"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              {text}
              <span className={`cursor ${isTypingComplete ? "blink" : ""}`}>
                |
              </span>
            </motion.h1>

            <motion.h2
              className="title-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <span className="highlight">BTech Student</span> at Graphic Era
              Hill University
            </motion.h2>

            <motion.div
              className="tech-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              {["React", "JavaScript", "Node.js", "CSS3"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="tech-pill"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
            >
              Transforming ideas into elegant code solutions.
              <br />
              Building the future, one project at a time.
            </motion.p>
          </div>
        </div>
        <div className="status-greeting">
            <motion.div 
              className="greeting-icon"
              animate={{ rotate: [0, 15, 0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
            >
              <MdOutlineWavingHand />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              Feel free to <span className="highlight-text">reach out</span> for collaborations or projects!
            </motion.p>
          </div>
        {/* Enhanced Futuristic Status Section */}
        <motion.div 
          className="status-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div 
            className="status-card-wrapper"
          >
            <motion.div 
              className="status-card futuristic"
              whileHover={{
                scale: 1.02
              }}
            >
              <div className="card-glow"></div>
              <div className="card-glass"></div>
              
              <div className="status-badge">
                <div className="status-indicator pulse"></div>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Currently Active
                </motion.span>
              </div>
              
              <div className="status-content">
                <div className="status-icon-container">
                  <div className="status-icon-outer">
                    <div className="status-icon-ring"></div>
                    <motion.div 
                      className="status-icon"
                      animate={{ 
                        rotateZ: [0, 360] 
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    >
                      <FaBriefcase />
                    </motion.div>
                  </div>
                </div>
                
                <div className="status-info">
                  <div className="status-header">
                    <h3>
                      <span className="highlight-text">Web Developer</span> at
                    </h3>
                    <div className="company-details">
                      <motion.div className="company-name-wrapper">
                        <h2 className="company-name">RettRose</h2>
                        <div className="company-name-decoration"></div>
                      </motion.div>
                      
                      <motion.a 
                        href="https://rettrose.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="company-link"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(97, 218, 251, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Visit</span> <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                    
                    <div className="status-description">
                      <p>Creating innovative web solutions with cutting-edge technologies</p>
                      
                      <div className="status-tech-icons">
                        {[
                          { icon: FaReact, label: "Shopify", className: "shopify-icon" },
                          // { icon: FaNodeJs, label: "Node.js" },
                          // { icon: FaCode, label: "Frontend" }
                        ].map((tech, index) => (
                          <motion.div 
                            key={index} 
                            className="tech-icon-wrapper"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3 + (index * 0.1) }}
                          >
                            <div className={`tech-icon-bg ${tech.className || ""}`}>
                              <tech.icon className="tech-icon" />
                            </div>
                            <span className="tech-label">{tech.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="status-decoration top-left"></div>
              <div className="status-decoration top-right"></div>
              <div className="status-decoration bottom-left"></div>
              <div className="status-decoration bottom-right"></div>
              <div className="circuit-lines"></div>
            </motion.div>
          </motion.div>
          
          
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          <div className="social-links">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/Deepakdumka1",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                link: "https://linkedin.com/in/deepak-dumka-698228260",
                label: "LinkedIn",
              },
              {
                icon: FaEnvelope,
                link: "mailto:ddumka102@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="social-icon" />
                <span className="social-label">{label}</span>
              </motion.a>
            ))}
          </div>

          <div className="action-buttons">
            <motion.button
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")} // Add this onClick handler
            >
              View My Work
            </motion.button>
            <motion.a
              href="/resume/Deepak_Dumka_Resume.pdf" // Make sure this PDF exists in your public folder
              download="Deepak_Dumka_Resume.pdf"
              className="secondary-button"
              style={{ textDecoration: "none" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Download CV</motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
