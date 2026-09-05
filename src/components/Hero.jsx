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

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Samiksha <span>Rote</span>
          </h1>

          <h2>
            Computer Science Student &
            <span> AI/ML Enthusiast</span>
          </h2>

          <p className="hero-description">
            I build intelligent and user-focused digital solutions
            by combining Artificial Intelligence, Machine Learning,
            full-stack development and creativity.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work →
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume ↓
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://www.linkedin.com/in/samiksha-rote-b8877a323/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Samiksharote"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </motion.div>

      </div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE ↓
      </a>

    </section>
  );
}

export default Hero;