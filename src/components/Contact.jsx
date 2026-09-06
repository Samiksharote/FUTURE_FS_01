import React from "react";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        
        {/* Section Heading */}
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p className="heading-description">
            Have an opportunity, project or idea? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Contact Details & Socials */}
          <div className="contact-info">
            <h3>Let's build something meaningful.</h3>
            <p>
              I'm open to internships, opportunities, collaborations, projects,
              and interesting ideas involving technology, AI, and web development.
            </p>

            <div className="contact-detail">
              <span>Email</span>
              <a href="mailto:samiksharote12@gmail.com">
                samiksharote12@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <span>Location</span>
              <p>Maharashtra, India</p>
            </div>

            {/* Social Links with Boxed Filled SVGs Inline */}
            <div
              className="contact-socials"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                marginTop: "25px"
              }}
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/samiksha-rote-b8877a323/"
                target="_blank"
                rel="noreferrer"
                className="social-box-link"
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none"
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    border: "1px solid rgba(79, 220, 255, 0.3)",
                    background: "rgba(11, 25, 53, 0.7)",
                    flexShrink: 0
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#4FDcff">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <span style={{ whiteSpace: "nowrap" }}>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Samiksharote"
                target="_blank"
                rel="noreferrer"
                className="social-box-link"
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none"
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    border: "1px solid rgba(79, 220, 255, 0.3)",
                    background: "rgba(11, 25, 53, 0.7)",
                    flexShrink: 0
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#4FDcff">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <span style={{ whiteSpace: "nowrap" }}>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>

            <button type="submit">Send Message →</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;