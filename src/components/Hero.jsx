import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Samiksha <span>Rote</span>
          </h1>

          <h2>
            Computer Science Student &<span> AI/ML Enthusiast</span>
          </h2>

          <p className="hero-description">
            I build intelligent and user-focused digital solutions by combining
            Artificial Intelligence, Machine Learning, full-stack development and
            creativity.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work &rarr;
            </a>

            <a href="/resume.pdf" download className="secondary-button">
              Download Resume &darr;
            </a>
          </div>

          {/* Social Links with Direct Inline Flex Rules */}
          <div className="hero-socials" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginTop: "25px" }}>
            <a
              href="https://www.linkedin.com/in/samiksha-rote-b8877a323/"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", flexDirection: "row", alignItems: "center", gap: "10px", textDecoration: "none" }}
            >
              <div className="icon-box" style={{ width: "32px", height: "32px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", border: "1px solid rgba(79, 220, 255, 0.3)", background: "rgba(11, 25, 53, 0.7)", flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#4FDcff">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <span style={{ whiteSpace: "nowrap" }}>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Samiksharote"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", flexDirection: "row", alignItems: "center", gap: "10px", textDecoration: "none" }}
            >
              <div className="icon-box" style={{ width: "32px", height: "32px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "6px", border: "1px solid rgba(79, 220, 255, 0.3)", background: "rgba(11, 25, 53, 0.7)", flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#4FDcff">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </div>
              <span style={{ whiteSpace: "nowrap" }}>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE &darr;
      </a>
    </section>
  );
}

export default Hero;