import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer" style={{ width: "100%", background: "#040914", padding: "35px 0", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
      <div className="footer-container" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        
        {/* Left Brand */}
        <div className="footer-brand">
          <h3 className="footer-logo" style={{ margin: "0 0 4px 0", fontSize: "1.3rem", fontWeight: 700, color: "#ffffff" }}>
            Samiksha Rote<span style={{ color: "#4FDcff" }}>.</span>
          </h3>
          <p className="footer-subtext" style={{ margin: 0, fontSize: "0.85rem", color: "#7e8c9f" }}>
            AI/ML • Full Stack • UI/UX
          </p>
        </div>

        {/* Far-Right Copyright */}
        <div className="footer-copyright">
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#7e8c9f", textAlign: "right" }}>
            &copy; {new Date().getFullYear()} Samiksha Rote. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;