// Import React
import React from "react";

// Import icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Footer component
function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* 🔥 GRID LAYOUT */}
        <div className="footer-grid">

          {/* TOP LEFT */}
          <div className="footer-top-left">
            <h5 className="footer-logo">
              <span className="footer-logo-main">Someleze</span>
              <span className="footer-logo-dot">.dev</span>
            </h5>
            <p>
              Crafting modern, scalable web applications with purpose.
            </p>
          </div>

          {/* TOP RIGHT */}
          <div className="footer-top-right">
            <a href="https://github.com/Someleze79" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/someleze-shweni" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* BOTTOM LEFT */}
          <div className="footer-bottom-left">
            <p>© 2026 Someleze Shweni. All rights reserved.</p>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="footer-bottom-right">
            <p>
              Built and designed by me, with attention to detail and performance.
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;