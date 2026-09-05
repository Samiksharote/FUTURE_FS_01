import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "../App.css";

function Expertise() {
  const containerRef = useRef(null);

  // Scroll tracking adjusted to end right as Card 04 finishes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 50%"]
  });

  const rawPathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smoothPathLength = useSpring(rawPathLength, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const cards = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Crafting responsive and interactive user interfaces using React, JavaScript, CSS, and modern frontend technologies to deliver seamless user experiences."
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Building secure REST APIs, authentication systems, server-side applications, and database integrations with scalable architectures."
    },
    {
      number: "03",
      title: "AI & Machine Learning",
      description:
        "Developing intelligent applications using NLP, Generative AI, Computer Vision, LLMs, and data-driven machine learning solutions."
    },
    {
      number: "04",
      title: "Data Science & ML",
      description:
        "Building and deploying machine learning models, data analysis pipelines, feature engineering, and model optimization using Python and Scikit-Learn."
    }
  ];

  return (
    <section id="expertise" className="section expertise-section" ref={containerRef}>
      <div className="expertise-container">
        
        {/* Top Split Layout */}
        <div className="expertise-top-row">
          <div className="expertise-header">
            <span className="expertise-badge">My Expertise</span>
            <h2>
              Building Modern Digital Solutions with <span>Code & AI</span>
            </h2>
            <p>
              Combining full-stack development, artificial intelligence, and modern tools to create impactful digital experiences.
            </p>
          </div>

          {/* Card 01 */}
          <motion.div
            className="flashcard card-1-top"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-pin"></div>
            <span className="card-num">{cards[0].number}</span>
            <h3>{cards[0].title}</h3>
            <p>{cards[0].description}</p>
          </motion.div>
        </div>

        {/* Timeline Path Wrapper */}
        <div className="expertise-path-wrapper">
          
          <svg
            className="curved-path-svg"
            viewBox="0 0 1000 850"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Static Line */}
            <path
              d="M 780 -20 C 620 100, 240 100, 240 230 C 240 360, 760 360, 760 510 C 760 640, 260 640, 260 770"
              stroke="rgba(79, 220, 255, 0.18)"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
            
            {/* Animated Dashed Line */}
            <motion.path
              d="M 780 -20 C 620 100, 240 100, 240 230 C 240 360, 760 360, 760 510 C 760 640, 260 640, 260 770"
              stroke="#4FDcff"
              strokeWidth="3.5"
              strokeDasharray="10 6"
              style={{ pathLength: smoothPathLength }}
            />
          </svg>
          {/* Card 02 - Reveals with glowing highlight on scroll */}
          <motion.div
            className="flashcard card-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-pin"></div>
            <span className="card-num">{cards[1].number}</span>
            <h3>{cards[1].title}</h3>
            <p>{cards[1].description}</p>
          </motion.div>

          {/* Card 03 - Reveals with glowing highlight on scroll */}
          <motion.div
            className="flashcard card-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-pin"></div>
            <span className="card-num">{cards[2].number}</span>
            <h3>{cards[2].title}</h3>
            <p>{cards[2].description}</p>
          </motion.div>

          {/* Card 04 - Reveals with glowing highlight on scroll */}
          <motion.div
            className="flashcard card-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-pin"></div>
            <span className="card-num">{cards[3].number}</span>
            <h3>{cards[3].title}</h3>
            <p>{cards[3].description}</p>
          </motion.div>

          <div className="path-slogan">
            Turning ideas into reality!
          </div>

        </div>

      </div>
    </section>
  );
}

export default Expertise;