// src/pages/FaqPage.jsx
export default function FaqPage() {
  return (
    <div className="p-4">
      <div className="base-title">
        <h2>조 & 방배정</h2>{" "}
      </div>
      <p>공지된 방 배정 및 조 편성은 아래에서 확인해 주세요</p>
      <img
        src={`${process.env.PUBLIC_URL}/img/timetale.webp`}
        alt="수련회 시간표"
        className="w-full max-w-md mx-auto border rounded shadow responsive-img"
      />
      <img
        style={{ margin: "15px" }}
        src={`${process.env.PUBLIC_URL}/img/timetale.webp`}
        alt="수련회 시간표"
        className="w-full max-w-md mx-auto border rounded shadow responsive-img"
      />
    </div>
  );
}
