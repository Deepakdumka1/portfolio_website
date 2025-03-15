import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import TypewriterComponent from "typewriter-effect";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

// Replace these with your EmailJS credentials
const EMAIL_SERVICE_ID = "service_voevtsu";
const EMAIL_TEMPLATE_ID = "template_mko155d";
const EMAIL_PUBLIC_KEY = "9A7CGzs73dH2iWjZ4";

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAIL_PUBLIC_KEY);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const result = await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current
      );

      if (result.text === "OK") {
        setFormStatus("success");
        setFormData({ user_name: "", user_email: "", message: "" });
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email error:", error);
      setFormStatus("error");
      setErrorMessage(
        error.message || "Failed to send message. Please try again."
      );
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/Deepakdumka1",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: <FiLinkedin />,
      url: "https://linkedin.com/in/deepak-dumka-698228260",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <FiTwitter />,
      url: "https://twitter.com/DeepakDumk20104",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: <FiInstagram />,
      url: "https://instagram.com/depak_.7",
      label: "Instagram",
      color: "#E4405F",
    },
  ];

  return (
    <motion.div
      className="contact-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contact-bg">
        <div className="gradient-blur"></div>
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
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
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="contact-content">
        <motion.div className="contact-header" variants={itemVariants}>
          <h1>Get in Touch</h1>
          <div className="typewriter-container">
            <TypewriterComponent
              options={{
                strings: [
                  "Let's create something amazing together",
                  "Have a project in mind?",
                  "Want to collaborate?",
                  "Let's make it happen!",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </div>
          <div className="header-line"></div>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-card">
              <div className="card-header">
                <h3>Contact Information</h3>
                <div className="card-decoration"></div>
              </div>

              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiMail className="info-icon" />
                <div className="info-content">
                  <h4>Email</h4>
                  <p>ddumka102@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <HiLocationMarker className="info-icon" />
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Uttarakhand, India</p>
                </div>
              </motion.div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)", // Default background
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: link.color,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                    <span className="tooltip">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div className="form-group" variants={itemVariants}>
              <div className="input-container">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
                <div className="input-focus-effect"></div>
              </div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <div className="input-container">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
                <div className="input-focus-effect"></div>
              </div>
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <div className="input-container">
                <FiMessageSquare className="input-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                ></textarea>
                <div className="input-focus-effect"></div>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className={`submit-btn ${formStatus}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {formStatus === "sending" ? (
                <div className="loading-spinner" />
              ) : formStatus === "success" ? (
                "Message Sent!"
              ) : formStatus === "error" ? (
                "Error Sending"
              ) : (
                <>
                  <FiSend className="btn-icon" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {(formStatus === "success" || formStatus === "error") && (
          <motion.div
            className={`notification ${formStatus}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {formStatus === "success"
              ? "Message sent successfully!"
              : errorMessage || "Error sending message. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
