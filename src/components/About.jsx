import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section about-section">

      <div className="section-container">

        <div className="section-label">
          ABOUT ME
        </div>

        <div className="about-grid">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="about-image-frame">
              <img
                src="/images/profile.png"
                alt="Samiksha Rote"
              />
            </div>

          </motion.div>


          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="small-heading">
              A LITTLE ABOUT ME
            </p>

            <h2>
              Turning ideas into
              <span> intelligent solutions.</span>
            </h2>

            <p>
              I'm Samiksha Rote, a Computer Science Engineering
              student specializing in Artificial Intelligence
              and Machine Learning.
            </p>

            <p>
              I enjoy exploring Artificial Intelligence,
              Machine Learning, Computer Vision and Full Stack
              Web Development. I like building practical
              technology solutions that solve real-world problems.
            </p>

            <p>
              I'm also interested in UI/UX design and creating
              simple, useful and engaging digital experiences.
            </p>

            <div className="about-info">

              <div>
                <span>Education</span>
                <strong>B.Tech CSE – AI & ML</strong>
              </div>

              <div>
                <span>Currently</span>
                <strong>Full Stack Web Development Intern</strong>
              </div>

              <div>
                <span>Interests</span>
                <strong>AI • ML • Web • UI/UX</strong>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;