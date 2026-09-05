import { motion } from "framer-motion";

function Technologies() {

  const categories = [
    {
      title: "Programming",
      technologies: [
        "Python",
        "Java",
        "C",
        "JavaScript"
      ]
    },

    {
      title: "Frontend Development",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS"
      ]
    },

    {
      title: "Backend & Database",
      technologies: [
        "Django",
        "Flask",
        "SQL",
        "SQLite"
      ]
    },

    {
      title: "AI & Machine Learning",
      technologies: [
        "Machine Learning",
        "Computer Vision",
        "OpenCV",
        "YOLO",
        "LLM",
        "RAG"
      ]
    },

    {
      title: "Tools & Design",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "UI/UX"
      ]
    }
  ];

  return (
    <section id="technologies" className="section technologies-section">

      <div className="section-container">

        <div className="section-heading">

          <p>TECHNICAL STACK</p>

          <h2>
            Technologies I <span>Work With</span>
          </h2>

          <p className="heading-description">
            A growing toolkit across software development,
            artificial intelligence and design.
          </p>

        </div>


        <div className="technology-categories">

          {categories.map((category, index) => (

            <motion.div
              className="technology-category"
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1
              }}
            >

              <h3>{category.title}</h3>

              <div className="technology-list">

                {category.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Technologies;