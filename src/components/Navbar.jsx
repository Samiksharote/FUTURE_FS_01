import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          SR<span>.</span>
        </a>

        <div className={`nav-links ${open ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;