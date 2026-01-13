import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="home-container">
      <div>
        <div className="p-4">
          {/* <h1 className="text-xl font-bold mb-4">프로그램 안내</h1>
      <p className="mb-4">아래는 수련회 시간표입니다.</p> */}
          <img
            src={`${process.env.PUBLIC_URL}/img/26년 수련회 포스터.webp`}
            alt="수련회 시간표"
            className="w-full max-w-md mx-auto border rounded shadow responsive-img"
          />
        </div>
      </div>
      <section className="card-section">
        <Link to="/program" className="card">
          <span className="emoji">📖</span>
          <p>수련회 전체일정</p>
        </Link>
        <Link to="/location" className="card">
          <span className="emoji">🍽️</span>
          <p>수련회 위치</p>
        </Link>
        <Link to="/faq" className="card">
          <span className="emoji">🙏</span>
          <p>공지사항</p>
        </Link>
      </section>
    </div>
  );
}
