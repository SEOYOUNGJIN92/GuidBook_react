import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="container">
      {" "}
      <header className="header">2026 수련회 가이드북</header>{" "}
      <div className="menu">
        {" "}
        <Link to="/program" className="icon">
          📖
        </Link>{" "}
        <Link to="/location" className="icon">
          🏞️
        </Link>{" "}
        <Link to="/faq" className="icon">
          🙏
        </Link>{" "}
      </div>{" "}
      {/* <footer className="footer">OO교회 | 문의: 010-1234-5678</footer>{" "} */}
    </div>
  );
}
