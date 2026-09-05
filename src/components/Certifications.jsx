import { motion } from "framer-motion";

function Certifications() {

  const certifications = [
    {
      name: "Machine Learning with Python",
      issuer: "IBM – Cognitive Class",
      year: "2026",
      image: "/certificates/ibm-ml.jpg"
    },

    {
      name: "Fundamentals of Machine Learning & AI",
      issuer: "AWS",
      year: "2026",
      image: "/certificates/aws-ai.jpg"
    },

    {
      name: "Data Analytics with ChatGPT & Power BI",
      issuer: "Aspire For Her",
      year: "2025",
      image: "/certificates/data-analytics.jpeg"
    }
  ];

  return (
    <section
      id="certifications"
      className="section certifications-section"
    >

      <div className="section-container">

        <div className="section-heading">

          <p>PROFESSIONAL CREDENTIALS</p>

          <h2>
            My <span>Certifications</span>
          </h2>

          <p className="heading-description">
            Certifications and learning milestones from my
            journey in AI, machine learning and technology.
          </p>

        </div>


        <div className="certifications-grid">

          {certifications.map((cert, index) => (

            <motion.article
              className="certificate-card"
              key={cert.name}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1
              }}
            >

              <div className="certificate-image">

                <img
                  src={cert.image}
                  alt={cert.name}
                />

              </div>


              <div className="certificate-content">

                <div className="certificate-top">

                  <span>
                    {cert.year}
                  </span>

                  <strong>
                    0{index + 1}
                  </strong>

                </div>

                <h3>
                  {cert.name}
                </h3>

                <p>
                  {cert.issuer}
                </p>


                <div className="certificate-actions">

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View →
                  </a>

                  <a
                    href={cert.image}
                    download
                  >
                    Download ↓
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;