import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
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

  // Rest of your component remains the same
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
