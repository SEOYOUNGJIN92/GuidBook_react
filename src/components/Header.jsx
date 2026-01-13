// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navStyle = "flex-1 text-center py-2";

  return (
    //     <div className="fixed bottom-0 w-full bg-white border-t flex text-sm">
    //       {/* 헤더 */}
    //       <div style={{ padding: "20px" }}>
    //         {/* Header 클릭 시 메인으로 이동 */}
    //         <h1
    //           onClick={MainPage}
    //           style={{ cursor: "pointer", color: "#2c3e50", marginBottom: "20px" }}
    //         >
    //           교회 수련회 가이드
    //         </h1>
    //         <p>메인 페이지에 오신 것을 환영합니다!</p>
    //       </div>
    //     </div>
    //   );

    <div className="fixed bottom-0 w-full bg-white border-t flex text-sm">
      <Link
        to="/"
        className={`${navStyle} ${
          pathname === "/" ? "font-bold text-blue-600" : ""
        }`}
      >
        교회 수련회 가이드
      </Link>
    </div>
  );
}
