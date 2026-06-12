// Import React
import React from "react";

// Import animation
import { motion } from "framer-motion";

// Import icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import images
import AICareerAssistant from "../assets/AICareerAssistant.jpeg";
import Freelancer from "../assets/Freelancer.jpeg";
import iTunesMedia from "../assets/iTunesMedia.jpeg";
import OnlineStore from "../assets/OnlineStore.jpeg";
import CashBalanceApp from "../assets/CashBalanceApp.jpeg";

// Projects component
function Projects() {

  // Project data
  const projects = [
    {
      title: "AI Career Assistant",
      description:
        "A full-stack web application designed to help job seekers manage their job search, improve their resumes, generate professional cover letters, prepare for interviews, and receive AI-powered career guidance.",
      tech: "React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, OpenAI API, Axios, Render, Git",
      image: AICareerAssistant,
      github: "https://github.com/Someleze79/AI-Career-Assistant",
      demo: "https://ai-career-assistant-1-onpg.onrender.com"
    },
    {
      title: "Freelancer Task Manager Pro",
      description:
        "A full-stack MERN productivity platform for managing projects, tasks, collaboration, and AI-powered insights.",
      tech: "React, Vite, Axios, Express.js, Node.js, Tailwind CSS, Socket.IO, Framer Motion, MongoDB, Mongoose, JWT, CORS",
      image: Freelancer,
      github: "https://github.com/Someleze79/Freelancer-Task-Manager",
      demo: "https://freelancer-task-manager-pro.onrender.com"
    },
    {
      title: "iTunes Media Web Application",
      description:
        "A Full-stack app with JWT authentication, API integration, and responsive UI for searching and saving media content.",
      tech: "JavaScript (ES6+), HTML5, CSS3, React, Node.js, Express, MongoDB, JWT, Axios",
      image: iTunesMedia,
      github: "https://github.com/Someleze79/iTunes-Media-Web-Application",
      demo: "https://itunes-media-web-application-1.onrender.com"
    },
    {
      title: "Online Store",
      description:
        "E-commerce interface with routing, dynamic product display, and responsive layout for a real-world shopping experience.",
      tech: "JavaScript (ES6+), HTML, React, React Router, Bootstrap",
      image: OnlineStore,
      github: "https://github.com/Someleze79/Online-Store",
      demo: "https://online-store-sigma-lilac.vercel.app/"
    },
    {
      title: "Cash Balance App",
      description:
        "Interactive financial app with global state management allowing deposits, withdrawals, and real-time balance updates.",
      tech: "JavaScript (ES6+), HTML, CSS, React, Global State Management",
      image: CashBalanceApp,
      github: "https://github.com/Someleze79/Cash-Balance-App",
      demo: "https://cash-balance-app.vercel.app/"
    }
  ];

  return (
    <motion.div
      className="container"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      {/* Gradient heading */}
      <h1 className="text-center mb-5 gradient-text">
        Projects
      </h1>

      <div className="row">

        {projects.map((project, index) => (
          <motion.div
            className="col-md-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >

            {/* Project card */}
            <div className="project-card h-100">

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              {/* Content */}
              <div className="p-4 d-flex flex-column">

                {/* Title */}
                <h5>{project.title}</h5>

                {/* 🔥 Description */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* 🔥 Tech badges */}
                <div className="tech-stack mt-2">
                  {project.tech.split(",").map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto d-flex gap-2 mt-3 flex-wrap">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}

export default Projects;