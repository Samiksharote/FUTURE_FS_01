import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="section-container">

        <div className="section-heading">

          <p>ACADEMIC BACKGROUND</p>

          <h2>
            My <span>Education</span>
          </h2>

          <p className="heading-description">
            My academic journey in Computer Science,
            Artificial Intelligence and Machine Learning.
          </p>

        </div>


        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="education-number">
            01
          </div>

          <div className="education-content">

            <div className="education-top">

              <span className="education-year">
                2023 — 2027
              </span>

              <span className="education-status">
                CURRENT
              </span>

            </div>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Computer Science Engineering
            </h4>

            <p className="education-specialization">
              Specialization: Artificial Intelligence & Machine Learning
            </p>

            <p>
              Deogiri Institute of Engineering and Management Studies
            </p>

            <div className="education-tags">

              <span>AI & ML</span>
              <span>Computer Science</span>
              <span>Software Development</span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;