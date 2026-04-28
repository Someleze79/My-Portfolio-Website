// Import React
import React from "react";

// Import icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaArrowRight
} from "react-icons/fa";

// Import profile image
import profile from "../assets/profile.jpeg";

// Hero section
function Hero() {

  // Scroll to projects
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section d-flex align-items-center">

      <div className="container">

        {/* 🔥 HERO CARD (MAIN WRAPPER) */}
        <div className="hero-card text-center">

          {/* Profile Image */}
          <div className="hero-image-wrapper">
            <img
              src={profile}
              alt="Profile"
              className="profile-image"
            />
          </div>

          {/* Name */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Someleze</span>
          </h1>

          {/* Title */}
          <h3 className="hero-subtitle">
            Full-Stack Web Developer
          </h3>

          {/* Description */}
          <p className="hero-description">
            I am a results-driven Full-Stack Developer specializing in building
            modern, scalable, and high-performance web applications using React,
            Node.js, and API-driven architecture. I focus on creating seamless
            user experiences that deliver real business value.
          </p>

          {/* CTA */}
          <div className="hero-buttons mt-4">

            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={scrollToProjects}
            >
              View Projects <FaArrowRight />
            </button>

          </div>

          {/* Social buttons */}
          <div className="hero-buttons mt-3">

            <a
              className="btn btn-outline-light d-flex align-items-center gap-2"
              href="https://github.com/Someleze79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              className="btn btn-outline-light d-flex align-items-center gap-2"
              href="https://linkedin.com/in/someleze-shweni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          {/* Contact buttons */}
          <div className="hero-buttons mt-3">

            <a
              href="mailto:someleze1738@gmail.com"
              className="btn btn-light d-flex align-items-center gap-2"
            >
              <FaEnvelope />
              Email
            </a>

            <a
              href="https://wa.me/27646164921"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light d-flex align-items-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="tel:+27646164921"
              className="btn btn-light d-flex align-items-center gap-2"
            >
              <FaPhone />
              Call
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;