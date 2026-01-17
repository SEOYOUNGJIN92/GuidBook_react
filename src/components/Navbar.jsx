// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🏛️ 용인제일교회-브릿지저스</div>

      {/* <li>
        <span className="navbar-item">
          주소 : (17053) 경기도 용인시 처인구 중부대로 1262번길 68
          <br />
          📞 긴급연락처: 010-1234-5678 (행정국장)
        </span>
      </li> */}

      <span className="navbar-item">
        주소 : (17053) 경기도 용인시 처인구 중부대로 1262번길 68
        <br />
        📞 긴급연락처: 010-1234-5678 (행정국장)
      </span>
    </nav>
  );
}

export default Navbar;
