// Import React
import React from "react";

// Import animation
import { motion } from "framer-motion";

// Import icons (stable mix of FA + SI)
import { FaReact, FaJs, FaNodeJs, FaGitAlt, FaCss3Alt, FaPalette } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
  SiBootstrap,
  SiNextdotjs,
  SiGithub,
  SiMongoose,
  SiHtml5
} from "react-icons/si";

// VS Code icon (correct library)
import { VscCode } from "react-icons/vsc";

// API icon
import { TbApi } from "react-icons/tb";

// Skills component
function Skills() {

  // Skills grouped by category
  const skills = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "UI/UX Principles", icon: <FaPalette /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Next.js", icon: <SiNextdotjs /> }
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> }
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongoose /> }
      ]
    },
    {
      title: "Core Skills",
      items: [
        { name: "REST APIs", icon: <TbApi /> },
        { name: "JWT Auth", icon: <TbApi /> },
        { name: "API Integration", icon: <TbApi /> }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <VscCode /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    }
  ];

  return (
    <motion.div
      className="container"
      id="skills"

      // Animation
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      {/* Gradient Heading */}
      <h1 className="text-center mb-5 gradient-text">
        Core Skills
      </h1>

      <div className="row">

        {/* Loop through categories */}
        {skills.map((category, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>

            {/* Skill Card */}
            <div className="skill-card p-4 h-100">

              {/* Category Title */}
              <h5 className="mb-3">{category.title}</h5>

              {/* Skills List */}
              {category.items.map((skill, i) => (
                <div
                  key={i}
                  className="skill-item d-flex align-items-center gap-3 mb-3"
                >

                  {/* Icon */}
                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <span>{skill.name}</span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </motion.div>
  );
}

export default Skills;
