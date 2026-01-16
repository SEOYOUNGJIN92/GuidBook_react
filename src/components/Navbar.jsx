// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🏛️ 교회명칭</div>
      <div className="navbar-links">
        <span className="navbar-item">교회</span>
        <span className="navbar-item">명칭</span>
        <span className="navbar-item">📞 긴급연락처: 010-1234-5678</span>
      </div>
    </nav>
  );
}

export default Navbar;
