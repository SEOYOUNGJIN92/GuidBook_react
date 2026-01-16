// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navStyle = "flex-1 text-center py-2";

  return (
    <Link to="/">
      <div className="retreat-header">
        <div className="overlay">
          <h1 className="title">2026 청년부 겨울수련회</h1>
          <h2 className="subtitle">청년이여 지금 기도하라!</h2>
          <p className="verse">
            “새벽 아직도 밝기 전에 예수께서 일어나 나가 한적한 곳으로
            <br /> 가사거기서 기도하시더니”
            <br /> <span className="reference">– 마가복음 1:35</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
