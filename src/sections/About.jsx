// Import React
import React from "react";

// Import animation
import { motion } from "framer-motion";

// About component
function About() {
  return (
    <motion.section
      id="about"
      className="about-section"

      // Fade + slide animation
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      {/* Section heading */}
      <div className="container">
        <h1 className="text-center mb-5 gradient-text">
          About Me
        </h1>
      </div>

      {/* 🔥 Full-width background section */}
      <div className="about-card-full">

        <div className="container">

          {/* 🔥 Inner rounded card */}
          <div className="about-card-inner">

            {/* Paragraph 1 */}
            <p className="mb-3">
              I am a passionate Full-Stack Developer focused on
              building modern, responsive, and user-friendly web applications.
              I enjoy turning complex problems into simple, clean, and intuitive solutions.
            </p>

            {/* Paragraph 2 */}
            <p className="mb-3">
              My experience includes working with React, Node.js, Express, and MongoDB,
              building full-stack applications with authentication, API integration,
              and scalable architecture.
            </p>

            {/* Paragraph 3 */}
            <p className="mb-0">
              I am constantly learning and improving my skills, with a strong focus on
              writing clean code, creating great user experiences, and building
              real-world projects that solve meaningful problems.
            </p>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default About;