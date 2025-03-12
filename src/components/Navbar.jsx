import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaProjectDiagram, 
  FaEnvelope,
  FaGithub,
  FaLinkedin 
} from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.1,
      color: "var(--accent-color)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const brandTextVariants = {
    short: {
      width: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    full: {
      width: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    short: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    full: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/about', name: 'About', icon: <FaUser /> },
    { path: '/projects', name: 'Projects', icon: <FaProjectDiagram /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="loading-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      <motion.div 
        className="nav-brand"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={brandTextVariants}
        animate={isHovered ? "full" : "short"}
      >
        <Link to="/">
          <motion.div className="brand-text-container">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.span
                  key="full"
                  className="brand-text full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  Deepak Dumka
                </motion.span>
              ) : (
                <motion.span
                  key="short"
                  className="brand-text short"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  DD
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div 
            className="brand-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 }}
          />
        </Link>
      </motion.div>

      {/* Rest of the navbar code remains the same */}
      <motion.div 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.div>

      <motion.ul 
        className={`nav-links ${isOpen ? 'active' : ''}`}
        initial={false}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={item.path}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
          >
            <Link 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className={location.pathname === item.path ? 'active-link' : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
              {location.pathname === item.path && (
                <motion.div 
                  className="active-indicator"
                  layoutId="activeIndicator"
                />
              )}
            </Link>
          </motion.li>
        ))}
        
        <div className="social-links">
          <motion.a
            href="https://github.com/DeepakDumka1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/deepak-dumka-698228260"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;