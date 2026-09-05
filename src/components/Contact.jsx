function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thank you! Your message has been submitted."
    );
  };

  return (
    <section id="contact" className="section contact-section">

      <div className="section-container">

        <div className="section-heading">

          <p>LET'S CONNECT</p>

          <h2>
            Get In <span>Touch</span>
          </h2>

          <p className="heading-description">
            Have an opportunity, project or idea?
            I'd love to hear from you.
          </p>

        </div>


        <div className="contact-grid">

          <div className="contact-info">

            <h3>
              Let's build something meaningful.
            </h3>

            <p>
              I'm open to internships, opportunities,
              collaborations, projects and interesting ideas
              involving technology, AI and web development.
            </p>


            <div className="contact-detail">

              <span>Email</span>

              <a href="mailto:samiksharote12@gmail.com">
                samiksharote12@gmail.com
              </a>

            </div>


            <div className="contact-detail">

              <span>Location</span>

              <p>
                Maharashtra, India
              </p>

            </div>


            <div className="contact-socials">

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

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <input
                type="text"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                required
              />

            </div>


            <input
              type="email"
              placeholder="Email Address"
              required
            />


            <input
              type="text"
              placeholder="Subject"
              required
            />


            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              required
            ></textarea>


            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;