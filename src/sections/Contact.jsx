// Import React
import React from "react";

// Import icons
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

// Contact component
function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        {/* 🔥 Section Heading */}
        <h1 className="contact-heading text-center mb-5">
          Get in touch
        </h1>

        {/* 🔥 Main Contact Card */}
        <div className="contact-card">

          <div className="row">

            {/* =========================
                LEFT SIDE (INFO)
            ========================= */}
            <div className="col-md-5 contact-left">

              <h2 className="mb-3">Let's Talk</h2>

              <p>
                I'm always open to new opportunities, collaborations, and exciting projects.
                If you're looking for a developer who can turn ideas into clean,
                scalable applications, let's connect.
              </p>

              {/* Contact Info */}
              <div className="contact-info mt-4">

                {/* Email */}
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <h6>Email</h6>
                    <span>someleze1738@gmail.com</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <h6>Phone</h6>
                    <span>+27 64 616 4921</span>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <h6>Location</h6>
                    <span>South Africa</span>
                  </div>
                </div>

              </div>

            </div>

            {/* =========================
                RIGHT SIDE (FORM)
            ========================= */}
            <div className="col-md-7">

              <form className="contact-form">

                {/* Name */}
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                />

                {/* Email */}
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                />

                {/* Message */}
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  required
                ></textarea>

                {/* Submit Button */}
                <button type="submit" className="send-btn">
                  Send Message ✈
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;