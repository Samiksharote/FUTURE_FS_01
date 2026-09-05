function Footer() {
  return (
    <footer className="footer">

      <div>

        <strong>
          Samiksha Rote<span>.</span>
        </strong>

        <p>
          AI/ML • Full Stack • UI/UX
        </p>

      </div>


      <p>
        © {new Date().getFullYear()}
        {" "}
        Samiksha Rote. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;