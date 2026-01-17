function InstallBanner() {
  const ua = navigator.userAgent.toLowerCase();
  const isiOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);

  return (
    <div
      style={{ background: "#f0f0f0", padding: "10px", textAlign: "center" }}
    >
      {isiOS && <p>📱 iPhone: 공유 버튼 → 홈 화면에 추가</p>}
      {isAndroid && <p>📱 Android: 메뉴(⋮) → 홈 화면에 추가</p>}
    </div>
  );
}
