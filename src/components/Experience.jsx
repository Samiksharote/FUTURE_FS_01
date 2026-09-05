import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="section experience-section">

      <div className="section-container">

        <div className="section-heading">

          <p>MY JOURNEY</p>

          <h2>
            Work <span>Experience</span>
          </h2>

        </div>


        <motion.div
          className="experience-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="experience-number">
            01
          </div>

          <div className="experience-content">

            <span className="experience-date">
              2026 — Present
            </span>

            <h3>
              Full Stack Web Development Intern
            </h3>

            <h4>
              Future Interns
            </h4>

            <p>
              Working on practical web development projects
              involving responsive interfaces, React, JavaScript,
              Git and modern development workflows.
            </p>

            <div className="experience-tags">

              <span>React</span>
              <span>JavaScript</span>
              <span>Git</span>
              <span>Web Development</span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;