import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      category: "AI • NEWS • ML",
      title: "NewsNest",
      description:
        "A personalized news recommendation platform that combines machine learning with live news APIs to provide relevant news content.",
      technologies: [
        "Python",
        "Flask",
        "Scikit-learn",
        "SQLite",
        "GNews API"
      ],
      github: "YOUR_NEWSNEST_GITHUB",
      demo: "YOUR_NEWSNEST_DEMO"
    },

    {
      category: "FULL STACK • WEB",
      title: "AttendEase",
      description:
        "A web-based attendance management system with separate dashboards for students, teachers and administrators.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django"
      ],
      github: "YOUR_ATTENDEASE_GITHUB",
      demo: "YOUR_ATTENDEASE_DEMO"
    },

    {
      category: "AI • LLM • RAG",
      title: "Multimodal Social Story Generator",
      description:
        "An AI-powered system designed to generate personalized social stories using text, images and multimodal technologies.",
      technologies: [
        "Python",
        "LLM",
        "RAG",
        "AI",
        "Computer Vision"
      ],
      github: "YOUR_SOCIAL_STORY_GITHUB",
      demo: "YOUR_SOCIAL_STORY_DEMO"
    },

    {
      category: "COMPUTER VISION",
      title: "SafeHome AI",
      description:
        "A computer vision based safety system designed to detect potentially dangerous household situations and generate alerts.",
      technologies: [
        "Python",
        "OpenCV",
        "YOLO",
        "Computer Vision"
      ],
      github: "YOUR_SAFEHOME_GITHUB",
      demo: "YOUR_SAFEHOME_DEMO"
    }
  ];

  return (
    <section id="projects" className="section projects-section">

      <div className="section-container">

        <div className="section-heading">

          <p>SELECTED WORK</p>

          <h2>
            My <span>Projects</span>
          </h2>

          <p className="heading-description">
            A selection of projects combining software development,
            artificial intelligence and practical problem solving.
          </p>

        </div>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1
              }}
              whileHover={{ y: -8 }}
            >

              <div className="project-top">

                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-number">
                  0{index + 1}
                </span>

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;