import { useState, useEffect } from "react";

function InstallPopup() {
  const [show, setShow] = useState(true);

  const ua = navigator.userAgent.toLowerCase();
  const isiOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);

  // 일정 시간 뒤 자동 닫기 (선택)
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 10000); // 10초 뒤 닫힘
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "300px",
        }}
      >
        <h3>📱 홈 화면에 추가하기</h3>
        {isiOS && <p>iPhone: 공유 버튼 → 홈 화면에 추가</p>}
        {isAndroid && <p>Android: 메뉴(⋮) → 홈 화면에 추가</p>}
        {!isiOS && !isAndroid && <p>모바일에서 확인해주세요</p>}
        <button onClick={() => setShow(false)}>닫기</button>
      </div>
    </div>
  );
}

export default InstallPopup;
