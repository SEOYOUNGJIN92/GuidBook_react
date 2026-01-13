// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navStyle = "flex-1 text-center py-2";

  return (
    <div className="fixed bottom-0 w-full bg-white border-t flex text-sm">
      <Link
        to="/"
        className={`${navStyle} ${
          pathname === "/" ? "font-bold text-blue-600" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/program"
        className={`${navStyle} ${
          pathname === "/program" ? "font-bold text-blue-600" : ""
        }`}
      >
        Program
      </Link>
      <Link
        to="/location"
        className={`${navStyle} ${
          pathname === "/location" ? "font-bold text-blue-600" : ""
        }`}
      >
        Location
      </Link>
      <Link
        to="/faq"
        className={`${navStyle} ${
          pathname === "/faq" ? "font-bold text-blue-600" : ""
        }`}
      >
        FAQ
      </Link>
    </div>
  );
}
