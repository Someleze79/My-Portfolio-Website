// Import React
import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  // 🔥 Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className="custom-navbar">

      <div className="nav-container">

        {/* 🔥 Logo */}
        <div
          className="nav-logo"
          style={{ cursor: "pointer" }}
          onClick={() => handleScroll("hero")}
        >
          <span className="logo-icon">&lt;/&gt;</span>
          <span className="logo-text">Someleze.dev</span>
        </div>

        {/* 🔥 Nav Links */}
        <ul className="nav-links">

          {[
            { name: "home", id: "hero" },      // 🔥 FIXED
            { name: "about", id: "about" },
            { name: "projects", id: "projects" },
            { name: "contact", id: "contact" }
          ].map((item) => (
            <li key={item.name}>
              <a
                onClick={() => handleScroll(item.id)}
                className={active === item.name ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </a>
            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;